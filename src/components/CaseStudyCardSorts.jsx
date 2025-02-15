import cardsorts from "../assets/cardsorts.png";

const CaseStudyCardSorts = () => {
  return (
    <div className="py-20 px-4 md:px-40 flex flex-col">
        <h2 className="text-2xl custom-class-space-grotesk font-bold">Card Sorts & Affinity Mapping</h2>
        <br />
        <p className="text-justify custom-class-space-grotesk font-light">After the results, I ventured into the engaging phases of card sorting and affinity mapping. This interactive stage is particularly enlightening, as it allows us to immerse ourselves in the world of our users, extracting powerful narratives from their shared experiences, and translating this collective voice into an intuitive and empathetic design structure.</p>
        <br />
        <p className="text-justify custom-class-space-grotesk font-light">Through this process, I not only categorized key features and content but also mapped out the emotional and practical pathways that our users navigate in their educational journey.</p>
        <br />
        <img className="rounded-2xl" src={cardsorts} alt="cardsorts" />
    </div>
  )
}

export default CaseStudyCardSorts