import Image from 'next/image'
import React from 'react'
import { Name } from '../contact/page'

const data = [
    {
        title: "Our Mission",
        body: "For nearly a century, the scientific community has grappled with the challenge of Multiple Hypothesis Testing, particularly in gene expression analysis, where testing numerous hypotheses simultaneously can lead to a high risk of false positives. Despite extensive discussions and proposed solutions, a comprehensive framework has been elusive—until now.",
        image: "/gene.jpg"
    },
    {
        title: "Our Solution",
        body: "Introducing MultiDST, a groundbreaking solution designed to enhance and unify existing procedures into a robust framework for multiple testing. Our Python library and user-friendly website streamline the process, allowing researchers to input their p-values and apply various correction methods to control both family-wise error rate (FWER) and false discovery rate (FDR). MultiDST supports multiple correction techniques, including Bonferroni, Holm, Sequential Goodness of Fit (SGoF), Benjamini-Hochberg, Benjamini-Yekutieli, and Storey’s Q value procedures, all validated through comprehensive simulation studies and power analysis.",
        image: "/temp3.jpg"
    },
    {
        title: "Uniqueness",
        body: "MultiDST stands out as the first platform to systematically compare six correction methods—Bonferroni, Holm, SGoF, Benjamini-Hochberg, Benjamini-Yekutieli, and Storey’s Q value—accessible through an intuitive interface. We introduce the Significant Index Plot (SIP), an innovative visualization tool that aids researchers in detecting significant hypotheses across these correction procedures. The SIP provides a clear representation of significant hypotheses under each method, simplifying interpretation and comparison of results. Additionally, our hybrid technique sequentially tests and removes hypotheses, allowing seamless navigation between FWER and FDR methods, ensuring optimal results across diverse data scenarios, including Independent Hypotheses Weighting (IHW) situations.",
        image: "/temp2.jpg"
    },
    {
        title: "Proof of Concept",
        body: "MultiDST has demonstrated significant potential through pilot tests with several research groups focusing on gene expression analysis. Researchers found that our hybrid technique and SIP provided clear, intuitive visualizations, significantly enhancing the interpretation of significant hypotheses. The user-friendly interface and robust analytical tools streamlined workflows, enabling more accurate and reliable findings.",
        image: "/temp1.jpg"
    },
    {
        title: "Quality and Application of Technology",
        body: "MultiDST exemplifies high-quality technological integration, combining advanced statistical methods with modern web development. The front end, built with Next.js, ensures a fast, scalable, and responsive interface, while the back end, supported by our Python package MultiDST (available on [PyPI] (https://pypi.org/project/multidst/)), manages API requests efficiently using Python's Fast-API. Researchers can easily input their p-values and interact with the platform seamlessly.",
        image: "/temp4.jpg"
    },
]

function Header({children, reverse}){
    return(
        <h1 className={`text-7xl font-semibold mb-4 ${reverse ? 'text-right' : 'text-left'}`}>
            {children}
        </h1>
    )
}

function Body({children }){
    return(
        <p className={`font-medium text-justify`}>
            {children}
        </p>
    )
}




function Tile({title, body,image, reverse = false}) {

    if(reverse){
        return(
            <div className="flex items-center h-screen slider-left">
          <div className="flex-1 p-4 slider">
            <Header reverse={reverse}>{title}</Header>
            <Body reverse={reverse}>{body}</Body>
          </div>
          <div className="flex-1 justify-center items-center slider-right">
            <Image src={image} alt="Gene Image" layout="responsive" width={300} height={400} className="w-full h-auto rounded-md" />
          </div>
        </div>
        )
    }

    return(
        <div className="flex items-center h-screen slider-left">
      <div className="flex-1 justify-center items-center ">
        <Image src={image} alt="Gene Image" layout="responsive" width={300} height={400} className="w-full h-auto rounded-md" />
      </div>
      <div className="flex-1 p-4 slider-right">
      <Header reverse={reverse}>{title}</Header>
            <Body reverse={reverse}>{body}</Body>
      </div>
    </div>
    )
}


export default function About() {
  return (
    <div className='text-white'>

        <div className='mt-8'>
        <Header>Our Team</Header>
        <div className='flex items-center justify-between bg-slate-50 bg-opacity-10 p-10 mt-20'>
            
        <div className='font-medium text-slate-50 flex flex-col gap-y-1 text-lg'>
        <p className='text-3xl font-medium mb-4'>Developed By:</p>
           <p className='text-sm'>
            Susara Ouchithya
            </p>
           <p className='text-sm'>
            Sahan Madhushanka
            </p>
           <p className='text-sm'>
            Kaleelur Rahman
            </p>
        </div>
        <div>
            <p className='text-3xl font-medium'>Supervised By:</p>
            <div className='font-medium text-slate-50 flex flex-col gap-y-1 mt-4 text-lg'>

            <p className='text-sm'>
            Dr. Nilmini Hettiarachchi
(Tokyo Metropolitan Institute of Medical Science, Japan)
</p>
<p className='text-sm'>
Dr. Dilhari Attygalle
(University of Colombo, Department of Statistics, Sri Lanka)
</p>
<p className='text-sm'>
Dr. Gayan Dharmarathne
(University of Colombo, Department of Statistics, Sri Lanka)
            </p>
            </div>
        </div>

        </div>
        </div>

        {
            data.map((item, index) => <Tile title={item.title} image={item.image} body={item.body} key={index} reverse={index % 2} />)
        }
    </div>
  )
}

/*
## About Us

### Our Mission

For nearly a century, the scientific community has grappled with the challenge of Multiple Hypothesis Testing, particularly in gene expression analysis, where testing numerous hypotheses simultaneously can lead to a high risk of false positives. Despite extensive discussions and proposed solutions, a comprehensive framework has been elusive—until now.

### Our Solution

Introducing MultiDST, a groundbreaking solution designed to enhance and unify existing procedures into a robust framework for multiple testing. Our Python library and user-friendly website streamline the process, allowing researchers to input their p-values and apply various correction methods to control both family-wise error rate (FWER) and false discovery rate (FDR). MultiDST supports multiple correction techniques, including Bonferroni, Holm, Sequential Goodness of Fit (SGoF), Benjamini-Hochberg, Benjamini-Yekutieli, and Storey’s Q value procedures, all validated through comprehensive simulation studies and power analysis.

### Uniqueness

MultiDST stands out as the first platform to systematically compare six correction methods—Bonferroni, Holm, SGoF, Benjamini-Hochberg, Benjamini-Yekutieli, and Storey’s Q value—accessible through an intuitive interface. We introduce the Significant Index Plot (SIP), an innovative visualization tool that aids researchers in detecting significant hypotheses across these correction procedures. The SIP provides a clear representation of significant hypotheses under each method, simplifying interpretation and comparison of results. Additionally, our hybrid technique sequentially tests and removes hypotheses, allowing seamless navigation between FWER and FDR methods, and ensuring optimal results across diverse data scenarios, including Independent Hypotheses Weighting (IHW) situations.

### Functionality and Features

- Significant Index Plot (SIP): A unique tool for clear and intuitive representation of significant hypotheses under each correction method.
- Multiple Correction Methods: Supports Bonferroni, Holm, SGoF, Benjamini-Hochberg, Benjamini-Yekutieli, and Storey’s Q value procedures.
- Hybrid Technique: Sequentially tests and removes hypotheses, providing flexibility between FWER and FDR methods.
- User-Friendly Design: Accessible to researchers of all levels, with or without programming knowledge, thanks to our easy-to-use interface.
- Comprehensive Visualizations: Detailed histograms and graphical representations enhance data interpretation and comparison.

### Proof of Concept

MultiDST has demonstrated significant potential through pilot tests with several research groups focusing on gene expression analysis. Researchers found that our hybrid technique and SIP provided clear, intuitive visualizations, significantly enhancing the interpretation of significant hypotheses. The user-friendly interface and robust analytical tools streamlined workflows, enabling more accurate and reliable findings.

### Quality and Application of Technology

MultiDST exemplifies high-quality technological integration, combining advanced statistical methods with modern web development. The front end, built with Next.js, ensures a fast, scalable, and responsive interface, while the back end, supported by our Python package MultiDST (available on [PyPI](https://pypi.org/project/multidst/)), manages API requests efficiently using Python's Fast-API. Researchers can easily input their p-values and interact with the platform seamlessly.

By merging robust analytical tools with an easy-to-use interface, MultiDST empowers the scientific community to engage in more rigorous and insightful hypothesis testing, driving forward meaningful scientific discoveries.

*/
