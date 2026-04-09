import Link from "next/link";

const ServiceCardTen = ({ item }) => {
    return (
        <div className="tekup-iconbox-wrap border-all">
            <div className="tekup-iconbox-icon">
                <img src={item?.icon} alt={item?.title} />
            </div>
            <div className="tekup-iconbox-data">
                <Link href={item?.link || "/service"}>
                    <h4>{item?.title}</h4>
                </Link>
                <p>{item?.description}</p>
                <Link className="tekup-iconbox-btn" href={item?.link || "/service"}>
                    Learn More <i className="ri-arrow-right-up-line"></i>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCardTen;
