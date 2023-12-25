import "../../Styles/components/utils.css";
import ServiceCard from "../../components/ServiceCard";

function Services() {
    return (
        <div className="container my-4">
            <h1>Our Services</h1>
            <div className="row services">
                <ServiceCard
                    image={"/images/exterior.jpg"}
                    title={"Real Estate Investment"}
                    text="We can help you with: Acquiring Lands & Housing Properties,
                        Sales of Lands & Housing Properties, Real Estate Trading, 
                        Letting/Leasing, Property Investment Advice/Consultancy, Property/Facility Management. We are currently undertaking the buying, selling, 
                        renting, or leasing of several lands and buildings, and we believe we 
                        are the best option for you."
                />
                <ServiceCard
                    image={"/images/exterior.jpg"}
                    title={"Real Estate Investment"}
                    text="We can help you with: Acquiring Lands & Housing Properties,
                        Sales of Lands & Housing Properties, Real Estate Trading, 
                        Letting/Leasing, Property Investment Advice/Consultancy, Property/Facility Management. We are currently undertaking the buying, selling, 
                        renting, or leasing of several lands and buildings, and we believe we 
                        are the best option for you."
                />
                <ServiceCard
                    image={"/images/exterior.jpg"}
                    title={"Real Estate Investment"}
                    text="We can help you with: Acquiring Lands & Housing Properties,
                        Sales of Lands & Housing Properties, Real Estate Trading, 
                        Letting/Leasing, Property Investment Advice/Consultancy, Property/Facility Management. We are currently undertaking the buying, selling, 
                        renting, or leasing of several lands and buildings, and we believe we 
                        are the best option for you."
                />
                <ServiceCard
                    image={"/images/exterior.jpg"}
                    title={"Real Estate Investment"}
                    text="We can help you with: Acquiring Lands & Housing Properties,
                        Sales of Lands & Housing Properties, Real Estate Trading, 
                        Letting/Leasing, Property Investment Advice/Consultancy, Property/Facility Management. We are currently undertaking the buying, selling, 
                        renting, or leasing of several lands and buildings, and we believe we 
                        are the best option for you."
                />
            </div>
        </div>
    );
}

export default Services;
