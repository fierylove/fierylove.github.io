// app/components/Education.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Education = () => {
  return (
    <section id="work" className="py-12 bg-secondary">
      <Tabs defaultValue="work" className="w-full pt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="work">
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
    </section>

  );
};

export default Education;
