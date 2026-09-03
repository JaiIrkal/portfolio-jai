import { readFile } from "node:fs/promises";
import path from "node:path";

const resumeFileName = "Jai_Vinod_Irkal.pdf";

export async function GET() {
    const resume = await readFile(path.join(process.cwd(), "data", resumeFileName));

    return new Response(resume, {
        headers: {
            "Content-Disposition": `attachment; filename="${resumeFileName}"`,
            "Content-Type": "application/pdf",
        },
    });
}