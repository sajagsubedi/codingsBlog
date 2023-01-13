import BlogComponent from "./BlogComponent.jsx"
export default function BlogSection(props){
  return (
    <section className="BlogSection">
    {props.blogData.map((element)=>{
      return(
        <BlogComponent blogData={element} key={element.id}/>
        );
    })}
    </section>
    );
}