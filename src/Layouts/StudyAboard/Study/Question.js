import React, { useState } from "react";
import { BiCircle } from "react-icons/bi";

const Question = () => {
  const [collapseOne, setCollapseOne] = useState(true);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);
  const [collapseFour, setCollapseFour] = useState(false);

  return (
    <div>
      <div className={`border-x-4 pb-5 px-6 shadow`}>
        <button
          className="w-full text-left py-5"
          onClick={() => setCollapseOne(!collapseOne)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#whymalaysia"
          aria-expanded="false"
          aria-controls="whymalaysia"
        >
          <div className="flex items-center">
            <span className="pr-5 text-red">
              <BiCircle />
            </span>
            <span className="font-bold text-red">Why Study in Malaysia?</span>
          </div>
        </button>

        <div
          id="whymalaysia"
          class={`${
            collapseOne ? "visible h-[600px] opacity-100" : "h-0"
          } duration-500 ease-in-out overflow-hidden`}
        >
          <div className="py-5 px-10">
            <div>
              <p>
                Malaysia is an increasingly popular place to get tertiary
                education with more than 40,000 international students from over
                100 countries studying in Malaysia. It is the center of academic
                and higher education excellence in the region.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Quality Education Programs
              </h6>
              <p>
                The quality of education in Malaysia is strongly monitored by
                the Malaysian Government. Institutions in Malaysia provide
                professional, career-focused education offering courses that are
                up-to-date and market relevant. International students can also
                get an accredited degree from many choices of world-renowned
                universities from UK, USA, Australia, Canada and New Zealand
                through their twinning programs or branch campuses in Malaysia.{" "}
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Low Cost Living and Tuition Fees
              </h6>
              <p>
                Tuition fees of accredited and high quality programmes in
                Malaysia are very reasonable and highly affordable. The cost of
                living is also very low. A student can get by living comfortably
                for about RM10,000 a year (USD3,300). Furthermore the ringgit
                value is low compared to other currency and this gives students
                enormous savings while studying in Malaysia.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Courses are Conducted in English
              </h6>
              <p>
                International students should not have any problems studying in
                Malaysia as English is the primary medium of Instruction for all
                courses and study programs conducted at the private higher
                educational institutions. For those less proficient in the
                language, there are numerous schools and institutions offering
                basic English courses.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Multicultural Studying Environment
              </h6>
              <p>
                International students studying in Malaysia will get to
                experience of living in a plural and multicultural society. The
                ethnic diversities of Malaysia expose students to a value-added
                life, global outlook and better understanding of different
                cultures, ethnic groups and traditions throughout the world.
                There are three major races in Malaysia namely the Malays,
                Chinese and Indians together with other ethnic minorities. Apart
                from mixing with Malaysian students, international students are
                also exposed to other students from different nationalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-x-4 pb-5 px-6 shadow`}>
        <button
          className="w-full text-left py-5"
          onClick={() => setCollapseTwo(!collapseTwo)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#whymalaysia"
          aria-expanded="false"
          aria-controls="whymalaysia"
        >
          <div className="flex items-center">
            <span className="pr-5 text-red">
              <BiCircle />
            </span>
            <span className="font-bold text-red">Why Study in Malaysia?</span>
          </div>
        </button>

        <div
          id="whymalaysia"
          class={`${
            collapseTwo ? "visible h-[600px] opacity-100" : "h-0"
          } duration-500 ease-in-out overflow-hidden`}
        >
          <div className="py-5 px-10">
            <div>
              <p>
                Malaysia is an increasingly popular place to get tertiary
                education with more than 40,000 international students from over
                100 countries studying in Malaysia. It is the center of academic
                and higher education excellence in the region.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Quality Education Programs
              </h6>
              <p>
                The quality of education in Malaysia is strongly monitored by
                the Malaysian Government. Institutions in Malaysia provide
                professional, career-focused education offering courses that are
                up-to-date and market relevant. International students can also
                get an accredited degree from many choices of world-renowned
                universities from UK, USA, Australia, Canada and New Zealand
                through their twinning programs or branch campuses in Malaysia.{" "}
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Low Cost Living and Tuition Fees
              </h6>
              <p>
                Tuition fees of accredited and high quality programmes in
                Malaysia are very reasonable and highly affordable. The cost of
                living is also very low. A student can get by living comfortably
                for about RM10,000 a year (USD3,300). Furthermore the ringgit
                value is low compared to other currency and this gives students
                enormous savings while studying in Malaysia.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Courses are Conducted in English
              </h6>
              <p>
                International students should not have any problems studying in
                Malaysia as English is the primary medium of Instruction for all
                courses and study programs conducted at the private higher
                educational institutions. For those less proficient in the
                language, there are numerous schools and institutions offering
                basic English courses.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Multicultural Studying Environment
              </h6>
              <p>
                International students studying in Malaysia will get to
                experience of living in a plural and multicultural society. The
                ethnic diversities of Malaysia expose students to a value-added
                life, global outlook and better understanding of different
                cultures, ethnic groups and traditions throughout the world.
                There are three major races in Malaysia namely the Malays,
                Chinese and Indians together with other ethnic minorities. Apart
                from mixing with Malaysian students, international students are
                also exposed to other students from different nationalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-x-4 pb-5 px-6 shadow`}>
        <button
          className="w-full text-left py-5"
          onClick={() => setCollapseThree(!collapseThree)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#whymalaysia"
          aria-expanded="false"
          aria-controls="whymalaysia"
        >
          <div className="flex items-center">
            <span className="pr-5 text-red">
              <BiCircle />
            </span>
            <span className="font-bold text-red">Why Study in Malaysia?</span>
          </div>
        </button>

        <div
          id="whymalaysia"
          class={`${
            collapseThree ? "visible h-[600px] opacity-100" : "h-0"
          } duration-500 ease-in-out overflow-hidden`}
        >
          <div className="py-5 px-10">
            <div>
              <p>
                Malaysia is an increasingly popular place to get tertiary
                education with more than 40,000 international students from over
                100 countries studying in Malaysia. It is the center of academic
                and higher education excellence in the region.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Quality Education Programs
              </h6>
              <p>
                The quality of education in Malaysia is strongly monitored by
                the Malaysian Government. Institutions in Malaysia provide
                professional, career-focused education offering courses that are
                up-to-date and market relevant. International students can also
                get an accredited degree from many choices of world-renowned
                universities from UK, USA, Australia, Canada and New Zealand
                through their twinning programs or branch campuses in Malaysia.{" "}
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Low Cost Living and Tuition Fees
              </h6>
              <p>
                Tuition fees of accredited and high quality programmes in
                Malaysia are very reasonable and highly affordable. The cost of
                living is also very low. A student can get by living comfortably
                for about RM10,000 a year (USD3,300). Furthermore the ringgit
                value is low compared to other currency and this gives students
                enormous savings while studying in Malaysia.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Courses are Conducted in English
              </h6>
              <p>
                International students should not have any problems studying in
                Malaysia as English is the primary medium of Instruction for all
                courses and study programs conducted at the private higher
                educational institutions. For those less proficient in the
                language, there are numerous schools and institutions offering
                basic English courses.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Multicultural Studying Environment
              </h6>
              <p>
                International students studying in Malaysia will get to
                experience of living in a plural and multicultural society. The
                ethnic diversities of Malaysia expose students to a value-added
                life, global outlook and better understanding of different
                cultures, ethnic groups and traditions throughout the world.
                There are three major races in Malaysia namely the Malays,
                Chinese and Indians together with other ethnic minorities. Apart
                from mixing with Malaysian students, international students are
                also exposed to other students from different nationalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-x-4 pb-5 px-6 shadow`}>
        <button
          className="w-full text-left py-5"
          onClick={() => setCollapseFour(!collapseFour)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#whymalaysia"
          aria-expanded="false"
          aria-controls="whymalaysia"
        >
          <div className="flex items-center">
            <span className="pr-5 text-red">
              <BiCircle />
            </span>
            <span className="font-bold text-red">Why Study in Malaysia?</span>
          </div>
        </button>

        <div
          id="whymalaysia"
          class={`${
            collapseFour ? "visible h-[600px] opacity-100" : "h-0"
          } duration-500 ease-in-out overflow-hidden`}
        >
          <div className="py-5 px-10">
            <div>
              <p>
                Malaysia is an increasingly popular place to get tertiary
                education with more than 40,000 international students from over
                100 countries studying in Malaysia. It is the center of academic
                and higher education excellence in the region.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Quality Education Programs
              </h6>
              <p>
                The quality of education in Malaysia is strongly monitored by
                the Malaysian Government. Institutions in Malaysia provide
                professional, career-focused education offering courses that are
                up-to-date and market relevant. International students can also
                get an accredited degree from many choices of world-renowned
                universities from UK, USA, Australia, Canada and New Zealand
                through their twinning programs or branch campuses in Malaysia.{" "}
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Low Cost Living and Tuition Fees
              </h6>
              <p>
                Tuition fees of accredited and high quality programmes in
                Malaysia are very reasonable and highly affordable. The cost of
                living is also very low. A student can get by living comfortably
                for about RM10,000 a year (USD3,300). Furthermore the ringgit
                value is low compared to other currency and this gives students
                enormous savings while studying in Malaysia.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Courses are Conducted in English
              </h6>
              <p>
                International students should not have any problems studying in
                Malaysia as English is the primary medium of Instruction for all
                courses and study programs conducted at the private higher
                educational institutions. For those less proficient in the
                language, there are numerous schools and institutions offering
                basic English courses.
              </p>
              <h6 className="mt-4 mb-5 text-blue font-bold">
                Multicultural Studying Environment
              </h6>
              <p>
                International students studying in Malaysia will get to
                experience of living in a plural and multicultural society. The
                ethnic diversities of Malaysia expose students to a value-added
                life, global outlook and better understanding of different
                cultures, ethnic groups and traditions throughout the world.
                There are three major races in Malaysia namely the Malays,
                Chinese and Indians together with other ethnic minorities. Apart
                from mixing with Malaysian students, international students are
                also exposed to other students from different nationalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
