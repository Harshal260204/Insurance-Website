import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const generatePDF = async (data) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        let pdfPath;

        if (data.type === "report") {
            pdfPath = path.join("uploads", `sold-policies-report.pdf`);
        } else if (data.claimAmount) {
            pdfPath = path.join("uploads", `claim-${data._id}.pdf`);
        } else {
            pdfPath = path.join("uploads", `policy-${data._id}.pdf`);
        }

        const stream = fs.createWriteStream(pdfPath);
        doc.pipe(stream);

        if (data.type === "report") {
            // Generate Policies Sold Report (Admin)
            doc.fontSize(16).text("Policies Sold Report", { align: "center" }).moveDown();
            data.policies.forEach((policy, index) => {
                doc.fontSize(12).text(
                    `${index + 1}. ${policy.policyName} - ₹${policy.policyAmount} (User: ${policy.user.name}, Email: ${policy.user.email})`
                );
            });

        } else if (data.claimAmount) {
            // Generate Claim Approval PDF
            doc.fontSize(16).text("Claim Approved", { align: "center" }).moveDown();
            doc.fontSize(12).text(`User ID: ${data.user}`);
            doc.text(`Policy ID: ${data.policy}`);
            doc.text(`Claim Amount: ₹${data.claimAmount}`);
            doc.text(`Status: Approved`);

        } else {
            // Generate Policy Purchase Receipt (User)
            doc.fontSize(16).text("Policy Purchase Receipt", { align: "center" }).moveDown();
            doc.fontSize(12).text(`Policy Name: ${data.policyName}`);
            doc.text(`Policy Number: ${data.policyNumber}`);
            doc.text(`Policy Amount: ₹${data.policyAmount}`);
            doc.text(`Purchase Date: ${new Date(data.purchaseDate).toLocaleString()}`);
        }

        doc.end();
        stream.on("finish", () => resolve(pdfPath));
        stream.on("error", (err) => reject(err));
    });
};

export default generatePDF;
