import Card from "./Card";

const Features = () => {
  return (
    <div className="flex flex-col items-center px-4 py-16">
      <h1 className="mx-2 text-3xl font-thin text-gray-500 md:text-4xl">
        Reliable, efficient delivery
      </h1>
      <h1 className="mb-4 text-3xl font-semibold text-gray-700 md:text-4xl">
        Powered by Technology
      </h1>
      <h3 className="md:w-[32%] text-sm text-center text-gray-400">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </h3>

      <div className="flex flex-col gap-6 mt-16 md:flex-row">
        <div className="flex flex-col justify-center">
          <Card
            heading="Supervisor"
            content="Monitors activity to identify project roadblocks"
            image="/images/icon-supervisor.svg"
            color="border-[#44D4D3]"
          />
        </div>
        <div className="flex flex-col justify-between gap-6">
          <Card
            heading="Team Builder"
            content="Scans our talent network to create the optimal team for your project"
            image="/images/icon-team-builder.svg"
            color="border-[#E95252]"
          />
          <Card
            heading="Karma"
            content="Regularly evaluates our talent to ensure quality"
            image="/images/icon-karma.svg"
            color="border-[#FCAE49]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Card
            heading="Calculator"
            content="Uses data from past projects to provide better delivery estimates"
            image="/images/icon-calculator.svg"
            color="border-[#539EF2]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
