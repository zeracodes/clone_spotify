import { Icon } from "Icons";
export default function DownloadApp() {
  return (
    <a
      href="/"
      className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-x-4"
    >
      <Icon name="download" size={20}/> Uygulamayı Yükle
    </a>
  );
}
