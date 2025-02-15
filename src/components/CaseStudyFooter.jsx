const CaseStudyFooter = () => {
  return (
    <div className="py-20 px-4 md:px-40 bg-[#E8F5FF]">
      <h2 className="text-2xl custom-class-space-grotesk font-bold">
        StudentConnect taught me
      </h2>
      <br />
      <div className="font-[Rubik] font-light text-justify grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div>
          <p>
            <span className="font-semibold">StudentConnect has been a journey of adaptation & expansion</span>, growing
            from a singular focus on the Student networking system to
            encompassing a broad spectrum of student needs and experiences. This
            evolution was fueled by a deep engagement with our users, whose
            insights have been invaluable. The app’s success in connecting
            students with mentors and resources has highlighted the critical
            role of accessible expertise in the educational journey.
          </p>
          <br />
        </div>
        <div>
          <p>
            <span className="font-semibold">The philosophy of user-centric design</span> has been a cornerstone of
            StudentConnect. From the outset, we invested heavily in
            understanding our users’ ambitions and challenges. This empathetic
            approach has not only enriched the design process but also made the
            creative journey incredibly rewarding. The joy of crafting an
            experience tailored to the genuine aspirations of students is a
            testament to the power of placing users at the heart of every design
            decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFooter;
