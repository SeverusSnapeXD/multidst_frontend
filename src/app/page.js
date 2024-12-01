import Testimonial from "@/components/Testimonial";
import Link from "next/link";

const methods = [
  {
    title: "Bonferroni Correction",
    description: "Baseline method; simple and conservative.",
    reference: "Bonferroni, C. (1935). Il calcolo delle assicurazioni su gruppi di teste. https://api.semanticscholar.org/CorpusID:89994272"
  },
  {
    title: "Holm-Bonferroni Correction",
    description: "Sequential approach; adjusts thresholds progressively.",
    reference: "Holm, S. (1979). A Simple Sequentially Rejective Multiple Test Procedure. Source: Scandinavian Journal of Statistics Scand J Statist, 6(6), 65–70. http://www.jstor.org/stable/4615733%0A http://www.jstor.org/page/info/about/policies/terms.jsp%0A http://www.jstor.org"
  },
  {
    title: "Benjamini-Hochberg Procedure",
    description: "Balances power and control; widely used in genomics.",
    reference: 'Benjamini, Y., & Hochberg, Y. (1995). "Controlling the false discovery rate: A practical and powerful approach to multiple testing." Journal of the Royal Statistical Society. Series B (Methodological), 57(1), 289-300.'
  },
  {
    title: "Benjamini-Yekutieli Method",
    description: "FDR control under dependence; accounts for correlated tests.",
    reference: "Benjamini, Y., & Yekutieli, D. (2001a). The control of the false discovery rate in multiple testing under dependency. Annals of Statistics, 29(4), 1165–1188. https://doi.org/10.1214/aos/1013699998"
  },
  {
    title: "Storey’s Q Value",
    description: "Adaptive FDR control; estimates proportion of true null hypotheses.",
    reference: "Storey, J. D., & Tibshirani, R. (2003). Statistical Significance for Genome-Wide Studies."
  },
  {
    title: "SGoF Test (Sequential Goodness-of-Fit)",
    description: "Increased power for large-scale testing; combines p-values from multiple tests.",
    reference: "Carvajal-Rodríguez, A., de Uña-Alvarez, J., & Rolán-Alvarez, E. (2009). A new multitest correction (SGoF) that increases its statistical power when increasing the number of tests. BMC Bioinformatics, 10, 209. https://doi.org/10.1186/1471-2105-10-209"
  },
]

const testimonials = [
  {
    imageSrc: "/isaac-babarinde-3.jpg",
    text: "A very beneficial new method for scientists dealing with gene expression data to narrow down true significant results based on the dataset.",
    name: "Dr. Isaac Adeyemi Babarinde",
    role: "Senior Research Associate, SUSTech University - Shenzhen China"
  },
  {
    imageSrc: "/Janashakthi_Insurance_logo.png",
    text: "The platform MultiDST has greatly simplified the process of identifying significant product types and cohorts, enabling an efficient approack to decision making with large-scale policy data.",
    name: "Ms. Fathima Ahmeer",
    role: "AGM - Life Operations, Janashakthi Insurance PLC"
  },
  {
    imageSrc: "/Gayan-Hettiarachchi.jpg",
    text: "MultiDST is a very intuitive useful new method with applications in material physics & nano science as well. It is beneficial in material discovery through high-throughput experiments.",
    name: "Associate Prof. Gayan Hettiarachchi",
    role: "Associate Professor, Tokyo International University"
  },
  {
    imageSrc: "/champa-magalle.jpg",
    text: "MultiDST has significantly streamlined the analysis process of multiple testing with robust features and intuitive visualizations, accelerating complex evaluations for accurate and efficient results.",
    name: "Dr. Champa Magalle",
    role: "Senior Lecturer (Statistics), University of Colombo"
  },
  {
    imageSrc: "/Nilmini-Hettiarachchi.jpg",
    text: "MultiDST is a sure method of getting statistically significant results and has proven to be very useful for multiple testing specially in large scale biomedical data.",
    name: "Dr. Nilmini Hettiarachchi",
    role: "Senior Scientist, Tokyo Metropolitan University of Medical Sciences"
  },
  {
    imageSrc: "/Dr-Rasika-Jayatillake.jpg",
    text: "<<< Add a wording >>>",
    name: "Dr. Rasika Jayatillake",
    role: "Senior Lecturer (Statistics), University of Colombo"
  },
  {
    imageSrc: "/rukshala-gunaratne.jpg",
    text: "<<< Add a wording >>>",
    name: "Ms. Rukshala Gunaratne",
    role: "PhD Candidate - University of Melbourne"
  },
  {
    imageSrc: "/hashini-coorey.jpg",
    text: "<<< Add a wording >>>",
    name: "Ms. Hashini Coorey",
    role: "PhD Candidate & Graduate Lab Assistant - Clemson University, SC USA"
  }
];

export default function Home() {
  return (
    <main className="py-2 ">
      <div className="flex flex-col items-center w-full h-screen justify-center">
        <div clScientistassName="mb-10 md:mb-20">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold text-white font-serif">MultiDST</h1>
        <p className="text-slate-50 font-semibold text-center">Multiple Testing Made Easy</p>
        </div>
        <p className="text-center md:w-[70%] text-slate-50 font-light text-lg my-10">
        A tool designed for multiple hypothesis testing in statistical analysis. It provides implementations of various methods to control the family-wise error rate (FWER) and false discovery rate (FDR) in scenarios involving multiple hypothesis tests. Significant Index Plot (SIP) can be used to visualize the significant hypotheses under each of the method with ease.
        </p>
        <Link href={'/analysis'}>
        <p className="px-10 py-3 bg-slate-50 font-medium rounded-md">Get Started</p>
        </Link>
      </div>
      <div>
        <p className="text-4xl text-white font-semibold mb-8 text-center">Implemented Methods</p>
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg::grid-cols-2">
        {
          methods.map((item, i) => <Method key={i} item={item} />)
        }
        </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center my-20">
        <p className="text-4xl text-white font-semibold mb-12 text-center">Testimonials</p>
        
        {/* Grid container with hidden scrollbar */}
        <div className="w-full overflow-x-auto pb-6 px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
          <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-[45%] lg:auto-cols-[30%] gap-6 min-w-min mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full snap-center">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}


function Method({item}){
  return(
    <div className="mb-10 bg-slate-50 p-8 rounded-sm reveal overflow-hidden">
      <p className="text-xl font-semibold mb-2 text-blue-700">{item.title}</p>
      <p className="mb-1">{item.description}</p>
      <p className="text-xs font-medium text-slate-800 break-words italic">{item.reference}</p>
    </div>
  )
}
