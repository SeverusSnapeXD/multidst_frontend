import Link from "next/link";

const methods = [
  {
    title: "Bonferroni Correction",
    description: "Baseline method; simple and conservative."
  },
  {
    title: "Holm-Bonferroni Correction",
    description: "Sequential approach; adjusts thresholds progressively."
  },
  {
    title: "Benjamini-Hochberg Procedure",
    description: "Balances power and control; widely used in genomics."
  },
  {
    title: "Benjamini-Yekutieli Method",
    description: "FDR control under dependence; accounts for correlated tests."
  },
  {
    title: "Storey’s Q Value",
    description: "Adaptive FDR control; estimates proportion of true null hypotheses."
  },
  {
    title: "SGoF Test (Sequential Goodness-of-Fit)",
    description: "Increased power for large-scale testing; combines p-values from multiple tests."
  },
]

export default function Home() {
  return (
    <main className="py-2 ">
      <div className="flex flex-col items-center w-full h-screen justify-center">
        <div className="mb-10 md:mb-20">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold text-white font-serif">MultiDST</h1>
        <p className="text-slate-50 font-semibold text-center">Multiple testing made easy</p>
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
    </main>
  );
}


function Method({item}){
  return(
    <div className="mb-10 bg-slate-50 p-8 rounded-sm reveal">
      <p className="text-xl font-semibold mb-2 ">{item.title}</p>
      <p className="">{item.description}</p>
    </div>
  )
}

// Bonferroni Correction
//     Reason for Selection: Baseline method; simple and conservative.
//     Error Type: Controls the family-wise error rate (FWER).
//     Reference: Bonferroni, C. (1935). Il calcolo delle assicurazioni su gruppi di teste. https://api.semanticscholar.org/CorpusID:89994272

// Holm-Bonferroni Correction
//     Reason for Selection: Sequential approach; adjusts thresholds progressively.
//     Error Type: Controls the family-wise error rate (FWER).
//     Reference: Holm, S. (1979). A Simple Sequentially Rejective Multiple Test Procedure. Source: Scandinavian Journal of Statistics Scand J Statist, 6(6), 65–70. http://www.jstor.org/stable/4615733%0Ahttp://www.jstor.org/page/info/about/policies/terms.jsp%0Ahttp://www.jstor.org

// Benjamini-Hochberg Procedure
//     Reason for Selection: Balances power and control; widely used in genomics.
//     Error Type: Controls the false discovery rate (FDR).
//     Reference: Benjamini, Y., & Hochberg, Y. (1995). "Controlling the false discovery rate: A practical and powerful approach to multiple testing." Journal of the Royal Statistical Society. Series B (Methodological), 57(1), 289-300.

// Benjamini-Yekutieli Method
//     Reason for Selection: FDR control under dependence; accounts for correlated tests.
//     Error Type: Controls the false discovery rate (FDR).
//     Reference: Benjamini, Y., & Yekutieli, D. (2001a). The control of the false discovery rate in multiple testing under dependency. Annals of Statistics, 29(4), 1165–1188. https://doi.org/10.1214/aos/1013699998

// Storey’s Q Value
//     Reason for Selection: Adaptive FDR control; estimates proportion of true null hypotheses.
//     Error Type: Controls the false discovery rate (FDR).
//     Reference: Storey, J. D., & Tibshirani, R. (2003). Statistical Significance for Genome-Wide Studies.

// SGoF Test (Sequential Goodness-of-Fit)
//     Reason for Selection: Increased power for large-scale testing; combines p-values from multiple tests.
//     Error Type: Varies (depends on setup).
//     Reference: Carvajal-Rodríguez, A., de Uña-Alvarez, J., & Rolán-Alvarez, E. (2009). A new multitest correction (SGoF) that increases its statistical power when increasing the number of tests. BMC Bioinformatics, 10, 209. https://doi.org/10.1186/1471-2105-10-209