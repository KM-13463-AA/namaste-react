//Functional component - function returning jsx

const Heading1 = () => <h1>Namaste React</h1>
const Heading2 = () => <h4>A beginner-friendly crash course</h4>

//Composition of components
const Headings = () => (
    <div className="title">
        <Heading1 />
        <Heading2 />
        <h4>by Akshay Saini</h4>
    </div>
);
export default Headings;