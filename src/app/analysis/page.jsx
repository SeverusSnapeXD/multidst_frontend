"use client";

import Button from "@/components/Button";
import FileReader from "./FileReader";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000"

const apiClient = axios.create({baseURL});

function Title({ children }) {
    return <h5 className="font-semibold text-sm mb-2">{children}</h5>
}

const list = ["Bonferroni Correction","Holm-Bonferroni Correction","Benjamini-Hochberg Procedure","Benjamini-Yekutieli Method",
"Storey’s Q Value","SGoF Test (Sequential Goodness-of-Fit)"
]


export default function page() {

    const [data, setData] = useState([]);
    const [textArea, setTextArea] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

   const handleFile = file => {
        let arr = [];
        file.data?.map(item => {
            arr.push(item[0]);
        });
        let text = arr.join(',\n');
        setData(arr);
        setTextArea(text);
   }

   const analyseData = async () => {
    try {
        if(selectedValue === "") return alert("Alpha value is required");
        const body = {
            p_values: data.toString(),
            alpha: selectedValue
        }
        // console.log('body ',body);
        const response = await apiClient.post("/analyze",body)
        console.log('response ', response.data);
    } catch (error) {
        console.log('eror analyse ',error)
    }
   }

    return (
        <div className="h-full text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Analysis</h1>
           
            <p className="text-sm">Please enter (copy-paste) your p-values into the allotted space and select the relevant correction method(s). For more information, please refer to our paper.</p>
                <div className="flex justify-between my-10 gap-10">

                    {/* step 1 */}
                    <div className="w-1/2">
                        <Title>
                            Step 1: Enter list of p-values:
                        </Title>
                        <textarea onChange={e => {
                            setTextArea(e.target.value)
                        }} placeholder="Type your comma-separated p-values here..." 
                         className="w-full border-2 p-2 mt-4 text-sm font-mono text-black" 
                         rows="15" 
                         value={textArea} />
                        <div>
                            <Button label={'Reset'} 
                            className="w-full mb-2 bg-transparent border border-1 border-white" 
                            onClick={() => {
                                setData([])
                                setTextArea([])
                            }}
                            />
                            <Button label={'Load Sample Data'} className="w-full" />
                            <FileReader onFileUpload={handleFile} />
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="w-1/2 px-6">
                        <div className="">
                        <Title>
                            Step 2: Compute following tests:
                        </Title>
                        <div className="flex flex-col gap-2">
                            <p>Set significance threshold at:</p>
                            <label>
                            <input
                    type="radio"
                    name="significance"
                    value="0.05"
                    className="mr-2"
                    checked={selectedValue === '0.05'}
                    onChange={handleChange}
                />
                                α = 0.05
                            </label>
                            <label>
                            <input
                    type="radio"
                    name="significance"
                    value="0.01"
                    className="mr-2"
                    checked={selectedValue === '0.01'}
                    onChange={handleChange}
                />
                                α = 0.01
                            </label>
                            <label>
                            <input
                    type="radio"
                    name="significance"
                    value="0.001"
                    className="mr-2"
                    checked={selectedValue === '0.001'}
                    onChange={handleChange}
                />
                                α = 0.001
                            </label>
                        </div>

                        {/* <ul className="mt-6 list-disc ml-3"  >
                            {
                                list.map(item => <li key={item} className="text-sm font-medium mb-3">{item}</li>)
                            }
                        </ul> */}
                        </div>
                        <Button label={'Analyze'} onClick={analyseData} className="w-full my-10" />
                        <div className="flex-1 justify-center items-center">
            <Image src="/gene.jpg" alt="Gene Image" layout="responsive" width={300} height={130} 
                className="w-full h-auto max-h-64 rounded-md" 
                />
                    </div>
                    </div>

                   
                </div>
                 {/* step 3 */}
                 <div className="">
                        <p className="text-2xl font-semibold">
                            Results
                        </p>
                        <div className="flex gap-x-10">
                        <div>
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
                        {/* Image */}
                        <div className="w-full items-center justify-center flex">

                            <div className="flex-1 justify-center items-center">
            <Image src={`${baseURL}/images/hist1722451354082672`} alt="Gene Image" layout="responsive" width={300} height={150} 
                className="w-full h-auto max-h-64 rounded-md" 
                />
                </div>
          </div>
          </div>
                    </div>
        </div>
    )
}
