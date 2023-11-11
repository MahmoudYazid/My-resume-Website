import React from "react";
import { Chrono } from "react-chrono";
const Card = ({ title, Desc })=>{
    return (
        <div
            class="W-[100%] h-[10rem] bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
        >
            <p class="text-lg font-bold font-sans">{title}</p>
            <div class="py-3">
                <p class="text-gray-400 text-sm">
                    {Desc}
                </p>
            </div>
        
        </div>
    )

}
class EducationTimeline extends React.Component {
    constructor(props) {
        super(props);
    }
    items = [
        {title: "2022-2023"},
        { title: "2023 " },

    ];
    componentDidMount() {
        const handler = (e) => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
    }
   
    render() {
     
        return (
            <div className="w-[100%] flex justify-center overflow-hidden items-center ">
                <div className="w-[80%] lg:w-[80%] h-[100%] overflow-hidden text-center">
                    <Chrono
                  
                        className="border-2 border-green-500"
                        hideControls={true}
                        mode="VERTICAL_ALTERNATING" 
                        theme={{
                            primary: 'white',
                            cardBgColor: 'backgroundGeneral',

                            titleColor: 'white',
                            titleColorActive: 'black',
                        }}
                        items={this.items}
                         >

                        <Card Desc={'Nextjs - react - html - css - javascript - redux'} title={'Freelance -FullStack Developer'}></Card>
                        <Card Desc={'Nextjs - react - html - css - javascript - redux'} title={'Frontend internship - SocialHub'}></Card>

                        </Chrono>
            </div>
            </div>
        );
    }
}

export default EducationTimeline;