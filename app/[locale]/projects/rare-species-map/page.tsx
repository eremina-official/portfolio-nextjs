import MapWrapper from "./MapWrapper";
import ErrorBoundary from "../../../../components/ErrorBoundary";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('projectsPage.projects.4');

  return (
    <ErrorBoundary>
    <div className="w-full flex mx-auto lg:max-w-7xl p-5">
      <MapWrapper />
    </div>

    </ErrorBoundary>
  );
}
