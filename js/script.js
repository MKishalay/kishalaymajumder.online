// Automatically keep the footer's copyright year current.
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Use Google Drive resume when available.
    // Falls back to local PDF if JavaScript is disabled.
    const resumeLink = document.getElementById("resume-link");

    if (resumeLink) {
        resumeLink.href =
            "https://drive.google.com/file/d/1WlpkzSm2rtNv8_w9Enl2_wrA2W-nAbwo/view?usp=sharing";
    }
});