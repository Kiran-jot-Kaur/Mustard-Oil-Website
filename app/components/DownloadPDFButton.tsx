export function DownloadPDFButton() {
  return (
    <a
      href="/lab-report-placeholder.txt"
      // TODO: Replace with final lab report PDF path when binary assets are reintroduced.
      className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
      download
    >
      Download Lab Report
    </a>
  );
}
