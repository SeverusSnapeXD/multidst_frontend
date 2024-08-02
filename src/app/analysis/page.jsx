"use client";

import Button from "@/components/Button";
import FileReader from "./FileReader";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useCSVReader , usePapaParse } from "react-papaparse";

const baseURL = "http://127.0.0.1:8000"

const apiClient = axios.create({baseURL});

function getImageUrl(fileName){
    return `${baseURL}/images/${fileName}.png`;
}

function Title({ children }) {
    return <h5 className="font-semibold text-sm mb-2">{children}</h5>
}

const list = ["Bonferroni Correction","Holm-Bonferroni Correction","Benjamini-Hochberg Procedure","Benjamini-Yekutieli Method",
"Storey’s Q Value","SGoF Test (Sequential Goodness-of-Fit)"
]


export default function Analysis() {

    const [data, setData] = useState([]);
    const [textArea, setTextArea] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [results, setResults] = useState(null);

    const {readString} = usePapaParse()

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

   const loadSampleData = () => {
    readString()

   }

   const analyseData = async () => {
    try {
        if(selectedValue === "") return alert("Alpha value is required");
        let p_valuesData = data.length > 0 ? data.toString() : textArea;
        const body = {
            p_values: p_valuesData,
            alpha: selectedValue
        }
        // console.log('body ',body);
        const response = await apiClient.post("/analyze",body)
        console.log('response ', response.data);
        if(response.data){
            setResults(response.data);
        }else{
            setResults(null);
        }
    } catch (error) {
        console.log('eror analyse ',error)
        alert("Something went wrong");
    }
   }

   function copyText(item){
    if(results?.[item]){
        console.log("copy ",results?.[item])
        navigator.clipboard.writeText(Array(results?.[item]).join(","));
        alert("Copied to clipboard");
    }
   }

    return (
        <div className="h-full text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Analysis</h1>
           
            <p className="text-sm">
                Please enter (copy-paste) your p-values into the allotted space and select a suitable threshold. Then, click "Analyze" to obtain the lists of significant p-values under each of the 6 methods, along with the historgram and the significant index plot (SIP).
                </p>
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
                                setResults(null);
                            }}
                            />
                            {/* <Button label={'Load Sample Data'} className="w-full" onClick={loadSampleData} /> */}
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
                            {
                                results?.hist &&
            <Image src={getImageUrl(results.hist)} alt="Gene Image" layout="responsive" width={300} height={130} 
                className="w-full h-auto max-h-64 rounded-md" 
                />
                            }
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
                            <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.Bonferroni} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("Bonferroni")}
                                className="text-xs 
                                bg-slate-500 
                                max-h-10
                                flex items-center justify-center
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Holm-Bonferroni Correction
                            </Title>
                            <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.Holm} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("Holm")}
                                className="text-xs 
                                bg-slate-500 
                                max-h-10
                                flex items-center justify-center
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                            {/* <div className="mb-3">
                                <textarea className="p-2" readOnly value={results?.Holm} rows="1"></textarea>
                            </div> */}
                        </div>
                        <div className="col mt-3">
                            <Title>
                                SGoF Test
                            </Title>
                            {/* <div className="mb-3">
                                <textarea className="p-2" readOnly value={results?.SGoF} rows="1"></textarea>
                            </div> */}
                            <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.SGoF} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("SGoF")}
                                className="text-xs 
                                bg-slate-500 
                                max-h-10
                                flex items-center justify-center
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Benjamini-Hochberg Procedure
                            </Title>
                            {/* <div className="mb-3">
                                <textarea className="p-2" readOnly value={results?.BH} rows="1"></textarea>
                            </div> */}
                             <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.BH} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("BH")}
                                className="text-xs 
                                bg-slate-500 
                                max-h-10
                                flex items-center justify-center
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Benjamini-Yekutieli Method
                            </Title>
                            {/* <div className="mb-3">
                                <textarea className="p-2" readOnly value={results?.BY} rows="1"></textarea>
                            </div> */}
                            <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.BY} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("BY")}
                                className="text-xs 
                                bg-slate-500 
                                max-h-10
                                flex items-center justify-center
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <Title>
                                Storey’s Q Value
                            </Title>
                            {/* <div className="mb-3">
                                <textarea className="p-2" readOnly value={results?.['Q-value']} rows="1"></textarea>
                            </div> */}
                            <div className="mb-3 text-black flex gap-4 ">
                                <textarea className="p-2 min-w-5" readOnly value={results?.['Q-value']} rows="1"></textarea>
                                <div 
                                onClick={() => copyText("Q-value")}
                                className="text-xs 
                                bg-slate-500 
                                flex items-center justify-center
                                max-h-10
                                text-white text-center rounded hover:cursor-copy">
                                <p>Copy to clipboard</p>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        {/* Image */}
                        <div className="w-full items-center justify-center flex">

                            <div className="flex-1 justify-center items-center">
                                {
                                    results?.sigindexplot &&
            <Image src={getImageUrl(results?.sigindexplot)} alt="Gene Image" layout="responsive" width={300} height={150} 
            className="w-full h-auto max-h-64 rounded-md" 
            />
        }
                </div>
          </div>
          </div>
                    </div>
        </div>
    )
}
