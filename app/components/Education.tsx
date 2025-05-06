// app/components/Education.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Education = () => {
  return (
    <section id="work" className="py-12 bg-secondary" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="work" className="w-full pt-4 ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <Card>
              <CardContent className="flex flex-col gap-4">
                {/* Vthere Internship */}
                <div className="bg-primary p-6 rounded shadow-md w-full">
                  <div className="flex items-center">
                    <img
                      src="./images/vthere-logo.jpg"
                      alt="Vthere Logo"
                      className="w-20 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Vthere</h3>
                      <h4 className="text-sm text-blue-400">Unity Developer (Internship)</h4>
                      <time className="text-sm italic text-blue-200">Jul 2024 - Apr 2025 · 10 mos</time>
                      <p className="text-sm mt-2">Singapore, Singapore · Hybrid</p>
                      <p className="text-sm mt-2">Making XR apps using Unity</p>
                    </div>
                  </div>
                </div>

                {/* Rubika Internship */}
                <div className="bg-primary p-6 rounded shadow-md w-full">
                  <div className="flex items-center">
                    <img
                      src="./images/rubika_logo.jpg"
                      alt="Rubika Logo"
                      className="w-20 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Rubika</h3>
                      <h4 className="text-sm text-blue-400">Internship Project</h4>
                      <time className="text-sm italic text-blue-200">Mar 2018 - May 2018 · 3 mos</time>
                      <p className="text-sm mt-2">France</p>
                      <p className="text-sm mt-2">
                        {`                      Collaborated with final-year students at Rubika Supinfogame in
                      Valenciennes, France, on the project "Of Sands and Steels," a multiplayer
                      boss fight RPG made with Unity Engine. Focused on user interface
                      programming and audio interface programming.`}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardContent className="flex flex-col gap-4">
                {/* Card 1 */}
                <div className="bg-primary p-6 rounded shadow-md w-full">
                  <div className="flex items-center">
                    <img
                      src="https://i0.wp.com/postgrad.com.sg/wp-content/uploads/2023/06/DigiPen_Singapore_WEB_RED.png?resize=768%2C297&ssl=1"
                      alt="DigiPen Logo"
                      className="w-20 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">
                        DigiPen Institute of Technology Singapore
                      </h3>
                      <h4 className="text-sm text-blue-400">
                        Bachelor of Science in Computer Science
                        <br />
                        in Real Time Interactive Simulation
                      </h4>
                      <time className="text-sm italic text-blue-200">2021 - 2025</time>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-primary p-6 rounded shadow-md w-full">
                  <div className="flex items-center">
                    <img
                      src="https://attendance.nyp.edu.sg/sas_staff/Graphics/nyplogo.gif"
                      alt="NYP Logo"
                      className="w-20 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Nanyang Polytechnic</h3>
                      <h4 className="text-sm text-blue-400">
                        Diploma, Game Development and Technology
                      </h4>
                      <time className="text-sm italic text-blue-200">2016 - 2019</time>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>

  );
};

export default Education;
