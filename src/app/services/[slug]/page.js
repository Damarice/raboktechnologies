import { notFound } from "next/navigation";
import servicesData from "~/db/servicesData";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import ServiceDetailSection from "~/components/Section/Service/ServiceDetailSection";

export function generateStaticParams() {
    return servicesData.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }) {
    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) notFound();

    return (
        <>
            <HeaderTwo className="tekup-header-top bg-light1" />
            <ServiceDetailSection service={service} />
            <CtaSection />
            <FooterOneSection className="tekup-footer-section dark-bg" />
        </>
    );
}
