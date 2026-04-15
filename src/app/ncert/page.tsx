'use client';
import Button from '@/components/Button';
import authFetch from '@/lib/auth/authFetch';
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react';
import { da } from 'zod/locales';

export default function page() {
  const router = useRouter();

  const classData = [
    {
      class: '9',
      title: 'FOUNDATION LEVEL',
      heading: 'Class IX',
      dis: 'Core conceptual frameworks and initial research methodologies.',
      points: ['FUNDAMENTAL SCIENCES', 'ADVANCED LITERACY'],
    },
    {
      class: '10',
      title: 'CRITICAL SYNTHESIS',
      heading: 'Class X',
      dis: 'Systematic deep-dives into analytical reasoning and global archives.',
      points: ['BOARD PREPARATION', 'ANALYTICAL LOGIC'],
    },
    {
      class: '11',
      title: 'SPECIALIZATION',
      heading: 'Class XI',
      dis: 'Discipline-specific tracks including Advanced STEM and Humanities.',
      points: ['STREAM SELECTION', 'CAREER MAPPING'],
    },
    {
      class: '12',
      title: 'APEX CURATORS',
      heading: 'Class XII',
      dis: 'Final mastery of subjects and preparation for global symposia.',
      points: ['GRADUATE PATHWAY', 'CAPSTONE RESEARCH'],
    },
  ];

  const selectClass = async (cal: string) => {
    const data = {
      class: cal,
    };

    const payload = JSON.stringify(data);
    const user = await authFetch({
      url: '/api/user/updateUser',
      options: {
        method: 'POST',
        body: payload,
      },
    });

    if (user.message.class) {
      router.push(`/ncert/${user.message.class}`);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col gap-24">
      <div className="flex flex-col p-12 gap-12">
        <div className="flex gap-2  items-center">
          <div className="h-[2px] bg-primary w-16"></div>
          <p className="text-[14px] font-semibold">DEFINING PATHFINDERS</p>
        </div>
        <div className="text-7xl font-extrabold flex justify-between">
          <div>
            <p>Select Your</p>
            <p className="text-accent">Academic Tier</p>
            <p className="text-[16px] font-normal pt-4 w-[40%] leading-5 text-primary/80">
              The Monolith curriculum adapts to your current level of rigor.
              Choose your academic standing to initialize the curation engine.
            </p>
          </div>
          <div className="flex justify-end flex-col items-end gap-2">
            <div className="flex gap-1">
              <div className="bg-primary h-2 w-12"></div>
              <div className="bg-accent/60 h-2 w-12"></div>
              <div className="bg-accent/60 h-2 w-12"></div>
              <div className="bg-accent/60 h-2 w-12"></div>
            </div>
            <div className="text-[14px] font-semibold leading-5 text-primary">
              STEP 01 / MILESTONE INITIALIZATION
            </div>
          </div>
        </div>

        <div className="flex gap-8 pt-12">
          {classData.map((val) => {
            return (
              <div key={val.title} className="flex flex-col w-[20%] bg-white p-8 gap-8 relative group hover:bg-primary transition-all duration-500 hover:text-white z-3">
                <div className="absolute text-[240px]  -right-3 -top-8  font-extrabold text-accent/40 -z-1">
                  {val.class}
                </div>
                <p className="text-[14px] tracking-[4px] w-[80%] font-bold text-primary/70 group transition-all duration-300 group-hover:text-white/60">
                  {val.title}
                </p>
                <p className="text-4xl font-bold pt-4">{val.heading}</p>
                <div className="w-12 h-1.5 bg-primary group transition-all duration-300 group-hover:bg-white"></div>
                <p className="tracking-wide text-black/67 font-medium group transition-all duration-300 group-hover:text-white/60">
                  {val.dis}
                </p>
                <div>
                  <div className="flex gap-2 items-center text-[14px] font-bold text-accent group transition-all duration-300 group-hover:text-white/60 ">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="white/60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.4109 7.52949L8.14199 3.7984L7.72917 3.38558L4.4109 6.70385L2.7484 5.04135L2.33558 5.45417L4.4109 7.52949V7.52949M5.25195 10.5C4.52597 10.5 3.84343 10.3622 3.20432 10.0867C2.5652 9.8112 2.00926 9.43728 1.5365 8.96495C1.06373 8.49263 0.689453 7.93721 0.413672 7.2987C0.137891 6.66018 0 5.97793 0 5.25195C0 4.52597 0.137761 3.84343 0.413284 3.20432C0.688807 2.5652 1.06273 2.00926 1.53506 1.5365C2.00738 1.06373 2.5628 0.689453 3.20131 0.413672C3.83983 0.137891 4.52207 0 5.24805 0C5.97403 0 6.65658 0.137761 7.29569 0.413284C7.9348 0.688807 8.49074 1.06273 8.96351 1.53506C9.43628 2.00738 9.81055 2.5628 10.0863 3.20131C10.3621 3.83983 10.5 4.52207 10.5 5.24805C10.5 5.97403 10.3622 6.65658 10.0867 7.29569C9.8112 7.9348 9.43728 8.49074 8.96495 8.96351C8.49263 9.43628 7.93721 9.81055 7.2987 10.0863C6.66018 10.3621 5.97794 10.5 5.25195 10.5V10.5M5.25 9.91667C6.55278 9.91667 7.65625 9.46459 8.56042 8.56042C9.46459 7.65625 9.91667 6.55278 9.91667 5.25C9.91667 3.94723 9.46459 2.84375 8.56042 1.93959C7.65625 1.03542 6.55278 0.583337 5.25 0.583337C3.94723 0.583337 2.84375 1.03542 1.93959 1.93959C1.03542 2.84375 0.583337 3.94723 0.583337 5.25C0.583337 6.55278 1.03542 7.65625 1.93959 8.56042C2.84375 9.46459 3.94723 9.91667 5.25 9.91667V9.91667M5.25 5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25"
                        fill="#828282"
                        fill-opacity="0.7"
                      />
                    </svg>
                    <p>{val.points[0]}</p>
                  </div>
                  <div className="flex gap-2 items-center text-[14px] font-bold text-accent ">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.4109 7.52949L8.14199 3.7984L7.72917 3.38558L4.4109 6.70385L2.7484 5.04135L2.33558 5.45417L4.4109 7.52949V7.52949M5.25195 10.5C4.52597 10.5 3.84343 10.3622 3.20432 10.0867C2.5652 9.8112 2.00926 9.43728 1.5365 8.96495C1.06373 8.49263 0.689453 7.93721 0.413672 7.2987C0.137891 6.66018 0 5.97793 0 5.25195C0 4.52597 0.137761 3.84343 0.413284 3.20432C0.688807 2.5652 1.06273 2.00926 1.53506 1.5365C2.00738 1.06373 2.5628 0.689453 3.20131 0.413672C3.83983 0.137891 4.52207 0 5.24805 0C5.97403 0 6.65658 0.137761 7.29569 0.413284C7.9348 0.688807 8.49074 1.06273 8.96351 1.53506C9.43628 2.00738 9.81055 2.5628 10.0863 3.20131C10.3621 3.83983 10.5 4.52207 10.5 5.24805C10.5 5.97403 10.3622 6.65658 10.0867 7.29569C9.8112 7.9348 9.43728 8.49074 8.96495 8.96351C8.49263 9.43628 7.93721 9.81055 7.2987 10.0863C6.66018 10.3621 5.97794 10.5 5.25195 10.5V10.5M5.25 9.91667C6.55278 9.91667 7.65625 9.46459 8.56042 8.56042C9.46459 7.65625 9.91667 6.55278 9.91667 5.25C9.91667 3.94723 9.46459 2.84375 8.56042 1.93959C7.65625 1.03542 6.55278 0.583337 5.25 0.583337C3.94723 0.583337 2.84375 1.03542 1.93959 1.93959C1.03542 2.84375 0.583337 3.94723 0.583337 5.25C0.583337 6.55278 1.03542 7.65625 1.93959 8.56042C2.84375 9.46459 3.94723 9.91667 5.25 9.91667V9.91667M5.25 5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25V5.25"
                        fill="#828282"
                        fill-opacity="0.7"
                      />
                    </svg>
                    <p>{val.points[1]}</p>
                  </div>
                </div>

                <Button
                  text="SELECT TIER"
                  color="bg-accent/40"
                  textCol="text-black"
                  hover="hover:bg-white"
                  additional="text-[15px] tracking-wider group group-hover:bg-white justify-end items-end"
                  action={() => selectClass(val.class)}
                ></Button>
              </div>
            );
          })}
        </div>

        <div className="flex pt-24 justify-around items-stretch">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[48px] leading-14 font-extralight text-primary/70 ">
              "The pursuit of knowledge is not a linear journey, but an
              architectural endeavor of the mind."
            </p>
            <div>
              <p className="font-bold text-[14px]">DR. ALISTAIR VANCE</p>
              <p className="text-[14px] text-primary/60">
                DIRECTOR OF CURATORIAL EXCELLENCE
              </p>
            </div>
          </div>
          <div className="flex-1 bg-accent/40 ">
            <div className=" p-8 flex flex-col justify-end h-full gap-2">
              <p className="font-semibold text-xl">Need assistance?</p>
              <p className="w-[80%]">
                If you are unsure which tier aligns with your current research
                objectives, our academic advisors are available for a
                consultation.
              </p>
              <a className="underline text-[14px]">SPEAK WITH A CURATOR</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-t-accent/20">
        <div className="flex justify-between pl-12 pr-12 p-4 items-center ">
          <div className="text-[10px] font-bold gap-8 flex text-primary/60">
            <p>© 2026 THE MONOLITH ACADEMY</p>
            <p>CURATED IN SONIPAT</p>
          </div>
          <div className="flex  justify-center items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75217 13.5C5.82188 13.5 4.94616 13.3224 4.125 12.9671C3.30385 12.6118 2.5887 12.1296 1.97957 11.5204C1.37043 10.9113 0.888222 10.1962 0.532933 9.37501C0.177644 8.55385 0 7.67813 0 6.74784C0 5.81755 0.177644 4.94255 0.532933 4.12284C0.888222 3.30313 1.37043 2.5887 1.97957 1.97957C2.5887 1.37043 3.30385 0.888222 4.125 0.532933C4.94616 0.177644 5.82188 0 6.75217 0C7.68246 0 8.55746 0.177644 9.37717 0.532933C10.1969 0.888222 10.9113 1.37043 11.5204 1.97957C12.1296 2.5887 12.6118 3.30313 12.9671 4.12284C13.3224 4.94255 13.5 5.81755 13.5 6.74784C13.5 7.67813 13.3224 8.55385 12.9671 9.37501C12.6118 10.1962 12.1296 10.9113 11.5204 11.5204C10.9113 12.1296 10.1969 12.6118 9.37717 12.9671C8.55746 13.3224 7.68246 13.5 6.75217 13.5V13.5M6.75 12.7558C7.19039 12.1904 7.55337 11.6351 7.83895 11.0899C8.12452 10.5447 8.35673 9.93462 8.53558 9.25962H4.96443C5.16251 9.97308 5.39953 10.6024 5.67549 11.1476C5.95145 11.6928 6.30962 12.2289 6.75 12.7558V12.7558M5.79519 12.6433C5.44519 12.2308 5.12572 11.7209 4.83678 11.1137C4.54784 10.5065 4.33269 9.88847 4.19135 9.25962H1.31539C1.7452 10.1923 2.35457 10.9572 3.14351 11.5543C3.93245 12.1514 4.81635 12.5144 5.79519 12.6433V12.6433M7.70482 12.6433C8.68366 12.5144 9.56756 12.1514 10.3565 11.5543C11.1454 10.9572 11.7548 10.1923 12.1846 9.25962H9.30866C9.11924 9.89808 8.88006 10.5209 8.59111 11.1281C8.30217 11.7353 8.00674 12.2404 7.70482 12.6433V12.6433M1.00962 8.50962H4.03558C3.97885 8.20193 3.9387 7.90217 3.91515 7.61034C3.89159 7.31851 3.87981 7.03174 3.87981 6.75C3.87981 6.46827 3.89159 6.1815 3.91515 5.88967C3.9387 5.59784 3.97885 5.29808 4.03558 4.99039H1.00962C0.927889 5.25001 0.864187 5.53294 0.818514 5.83919C0.772841 6.14544 0.750005 6.44904 0.750005 6.75C0.750005 7.05097 0.772841 7.35457 0.818514 7.66082C0.864187 7.96707 0.927889 8.25 1.00962 8.50962V8.50962M4.78558 8.50962H8.71443C8.77116 8.20193 8.8113 7.90697 8.83486 7.62476C8.85842 7.34255 8.8702 7.05097 8.8702 6.75C8.8702 6.44904 8.85842 6.15746 8.83486 5.87525C8.8113 5.59303 8.77116 5.29808 8.71443 4.99039H4.78558C4.72885 5.29808 4.68871 5.59303 4.66515 5.87525C4.64159 6.15746 4.62981 6.44904 4.62981 6.75C4.62981 7.05097 4.64159 7.34255 4.66515 7.62476C4.68871 7.90697 4.72885 8.20193 4.78558 8.50962V8.50962M9.46443 8.50962H12.4904C12.5721 8.25 12.6358 7.96707 12.6815 7.66082C12.7272 7.35457 12.75 7.05097 12.75 6.75C12.75 6.44904 12.7272 6.14544 12.6815 5.83919C12.6358 5.53294 12.5721 5.25001 12.4904 4.99039H9.46443C9.52116 5.29808 9.56131 5.59784 9.58486 5.88967C9.60842 6.1815 9.6202 6.46827 9.6202 6.75C9.6202 7.03174 9.60842 7.31851 9.58486 7.61034C9.56131 7.90217 9.52116 8.20193 9.46443 8.50962V8.50962M9.30866 4.24039H12.1846C11.7452 3.28846 11.143 2.52356 10.3781 1.94568C9.61323 1.36779 8.72212 1.00001 7.70482 0.842314C8.05482 1.30289 8.36948 1.82957 8.64881 2.42236C8.92813 3.01515 9.14808 3.62116 9.30866 4.24039V4.24039M4.96443 4.24039H8.53558C8.3375 3.53654 8.09327 2.9 7.80289 2.33077C7.5125 1.76154 7.16154 1.2327 6.75 0.744236C6.33847 1.2327 5.98751 1.76154 5.69712 2.33077C5.40674 2.9 5.16251 3.53654 4.96443 4.24039V4.24039M1.31539 4.24039H4.19135C4.35192 3.62116 4.57188 3.01515 4.8512 2.42236C5.13053 1.82957 5.44519 1.30289 5.79519 0.842314C4.76827 1.00001 3.87476 1.3702 3.11467 1.95289C2.35457 2.53558 1.75481 3.29808 1.31539 4.24039V4.24039"
                fill="#474747"
              />
            </svg>
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.21154 10.5C0.866347 10.5 0.578126 10.3844 0.346876 10.1531C0.115625 9.92188 0 9.63366 0 9.28847V1.21154C0 0.866347 0.115625 0.578126 0.346876 0.346875C0.578126 0.115625 0.866347 0 1.21154 0H12.2885C12.6337 0 12.9219 0.115625 13.1531 0.346875C13.3844 0.578126 13.5 0.866347 13.5 1.21154V9.28847C13.5 9.63366 13.3844 9.92188 13.1531 10.1531C12.9219 10.3844 12.6337 10.5 12.2885 10.5H1.21154V10.5M1.21154 9.75H12.2885C12.4039 9.75 12.5096 9.70193 12.6058 9.60577C12.7019 9.50962 12.75 9.40385 12.75 9.28847V2.25H0.750005V9.28847C0.750005 9.40385 0.798081 9.50962 0.894234 9.60577C0.990388 9.70193 1.09616 9.75 1.21154 9.75V9.75M3.375 8.46635L2.85866 7.95L4.78991 6L2.83991 4.05L3.375 3.53366L5.84135 6L3.375 8.46635V8.46635M7.125 8.62501V7.875H10.875V8.62501H7.125V8.62501"
                fill="#474747"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
