import Button from "@/components/Button";

function Title({ children }) {
    return <h5 className="font-semibold text-xl mb-2">{children}</h5>
}

const list = ["Bonferroni Correction","Holm-Bonferroni Correction","Benjamini-Hochberg Procedure","Benjamini-Yekutieli Method",
"Storey’s Q Value","SGoF Test (Sequential Goodness-of-Fit)"
]


export default function page() {
    return (
        <div className="h-screen text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Analysis</h1>
            <p className="text-sm">Please enter (copy-paste) your p-values into the allotted space and select the relevant correction method(s). For more information, please refer to our paper.</p>
                <div className="flex justify-between mt-8">
                    <div className="w-1/4">
                        <Title>
                            Step 1: Enter list of p-values:
                        </Title>
                        <textarea className="w-full border-2 p-2 mt-4" rows="15" />
                        <div>
                            <Button label={'Reset'} className="w-full mb-2" />
                            <Button label={'Load Sample Data'} className="w-full" />
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="w-2/4 px-6">
                        <Title>
                            Step 2: Compute following tests:
                        </Title>
                        <ul className="mt-6 list-disc ml-3"  >
                            {
                                list.map(item => <li key={item} className="text-sm font-medium mb-3">{item}</li>)
                            }
                        </ul>
                    </div>

                    {/* step 3 */}
                    <div className="w-1/4">
                        <Title>
                            Results
                        </Title>
                        <div className="col mt-6">
                            <Title>
                                Bonferroni Correction
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Holm-Bonferroni Correction
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Benjamini-Hochberg Procedure
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Benjamini-Yekutieli Method
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Storey’s Q Value
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                SGoF Test
                            </Title>
                            <div className="mb-3">
                                <textarea className="p-2" rows="1"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
