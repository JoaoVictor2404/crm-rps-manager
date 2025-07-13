import PDFDocument from 'pdfkit';
import fs from 'fs';

export function generateRpsPdf(rps: any, path: string) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path));
  doc.fontSize(20).text('RPS Provisório', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`City: ${rps.city}`);
  doc.text(`Series: ${rps.series}`);
  doc.text(`Number: ${rps.number}`);
  doc.text(`Amount: ${rps.amount}`);
  doc.end();
}
