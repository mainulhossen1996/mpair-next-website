"use client"
import React, { PureComponent } from 'react';
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Hero = () => {

    const CustomTooltip = ({ payload, label, active }) => {
        if (active && payload && payload.length) {
          return (
            <div className='border border-gray-700 bg-gray-800' style={{
              color: "#fff", 
              padding: "10px", 
              borderRadius: "10px", 
              boxShadow: "0px 4px 6px rgba(0,0,0,0.2)", 
              fontSize: "14px"
            }}>
              {payload.map((entry, index) => (
                <p key={index} style={{ margin: 0 }}>
                  <span style={{ fontWeight: 'semibold' }}>{entry.name}:</span> {entry.value}
                </p>
              ))}
            </div>
          );
        }
        return null;
      };


    const data = [
        { name: 'Page A', Click: 400, Reach: 600, amt: 2400 },
        { name: 'Page B', Click: 600, Reach: 800, amt: 2300 },
        { name: 'Page C', Click: 600, Reach: 1000, amt: 2500 },
        { name: 'Page D', Click: 600, Reach: 1000, amt: 2600 },
        { name: 'Page E', Click: 1000, Reach: 1600, amt: 2700 },
        { name: 'Page F', Click: 1000, Reach: 1600, amt: 2800 },
        { name: 'Page G', Click: 1800, Reach: 2400, amt: 2900 },
        { name: 'Page H', Click: 1800, Reach: 2400, amt: 3000 },
        { name: 'Page I', Click: 1800, Reach: 2400, amt: 3100 },
        { name: 'Page J', Click: 1800, Reach: 4200, amt: 3200 },
        { name: 'Page K', Click: 2600, Reach: 4200, amt: 3300 },
        { name: 'Page L', Click: 2600, Reach: 4200, amt: 3400 },
        { name: 'Page M', Click: 2200, Reach: 3000, amt: 3500 },
        { name: 'Page N', Click: 2200, Reach: 3000, amt: 3600 },
        { name: 'Page O', Click: 2200, Reach: 3000, amt: 3700 },
        { name: 'Page P', Click: 2200, Reach: 5400, amt: 3800 },
        { name: 'Page Q', Click: 3600, Reach: 5400, amt: 3900 },
        { name: 'Page R', Click: 3600, Reach: 5400, amt: 4000 },
        { name: 'Page S', Click: 4200, Reach: 6000, amt: 4100 },
        { name: 'Page T', Click: 4200, Reach: 6000, amt: 4200 },
      ];
      

    const canvasRef = useRef();

    useEffect(() => {
      let phi = 0;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [22.359913, 91.8254], size: 0.05 },
        //   { location: [40.7128, -74.006], size: 0.1 }
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        }
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
  
  return (
    <div className='seo-back pt-36'>
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-[70px] font-light text-center text-white'>
            Where Your Business Find <br/><span className='font-medium'>Local to Global Opportunities</span>
            </h1>

            <div className='flex items-end gap-6 py-20'>
                <div className='border border-gray-800 card-back-bg w-4/12 rounded-2xl h-[450px] overflow-hidden'>
                    <div className='p-6'> 
                    <p className='text-[18px] font-light text-white'>We specialize in connecting businesses to international markets, offering tailored strategies to <span className='font-semibold'>boost visibility, drive growth, and achieve global success.</span></p>
                    </div>
                   
                <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
                </div>

                <div className='border border-gray-800 card-back-bg w-4/12 rounded-2xl h-[450px] overflow-hidden'>
                   <div className='p-6'>
                    <span className='rounded-full bg-gray-200 px-3 py-1 text-sm text-black'>Analytics</span>
                    <p className='text-[20px] text-white pt-4'>Start measuring your traffic to get real-time insights so you can easily validate new changes.</p>
<div className='h-[200px] mt-12'>
<ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid  vertical={false} stroke="#2e3442"  />
        <YAxis
      tick={{ fontSize: 12, fill: "#4a5161" }} // Change text color
      axisLine={false} // Remove the start line
    />
        <Tooltip 
      content={<CustomTooltip />} 
    />

        <defs>
      <linearGradient id="fadeBlue" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1259ff" stopOpacity={0} />
        <stop offset="20%" stopColor="#1259ff" stopOpacity={1} />
      </linearGradient>
      <linearGradient id="fadeGreen" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#00ccf0" stopOpacity={0} />
        <stop offset="20%" stopColor="#00ccf0" stopOpacity={1} />
      </linearGradient>
    </defs>
    <Line
      type="linear"
      dataKey="Reach"
      stroke="url(#fadeBlue)"
      strokeWidth={2}
      dot={false}
      activeDot={{ r: 4, stroke: "#262626", fill: "#1259ff" }}
    />
    <Line
      type="linear"
      dataKey="Click"
      stroke="url(#fadeGreen)"
      strokeWidth={2}
      dot={false}
      activeDot={{ r: 4, stroke: "#262626", fill: "#00ccf0" }}
    />
      </LineChart>
    </ResponsiveContainer>
</div>
                   
                    </div>
                </div>


                <div className='border border-gray-800 card-back-bg w-4/12 rounded-2xl h-[250px] relative'>
                    <div className='absolute bottom-5 left-5 z-10'>
                        <p className='text-2xl text-yellow-400 font-semibold'>Kazi Tasin</p>
                        <span className='bg-white rounded-full px-3 text-gray-700 text-sm'>Sr. Digital Marketer,
                        mPair</span>
                    </div>
                    <div className='flex absolute bottom-0 right-0'>
                    <Image src="/image/Tasin.png"
                    height={500}
                    width={500}
                    alt=''
                    className="h-[500px] object-cover grayscale " />
                    </div>
                </div>

              
                
            </div>
             
        </div>

        
    </div>
  )
}
export default Hero;
