import React from "react";
import HomeHeroSection from "../HomePageSections/homeHeroSection";
import OurPillarsSection from "../HomePageSections/ourPillarsSection";
import OurProjectsSection from "../HomePageSections/ourProjectsSection";
import OurMissionSection from "../HomePageSections/ourMissionSection";
import IndustryFectsSection from "../HomePageSections/industryFectsSection";
import Newsletter from "../HomePageSections/newsletter";
import MissionHeroSection from "../MissionPageSections/missionHeroSection";
import MissionStatementSection from "../MissionPageSections/missionStatementSection";
import MissionWhyMattersSection from "../MissionPageSections/missionWhyMattersSection";
import MissionKeyPointsSection from "../MissionPageSections/missionKeyPointsSection";
import MissionCTASection from "../MissionPageSections/missionCTASection";
import MissionCommitmentSection from "../MissionPageSections/missionCommitmentSection";
import MissionContactSection from "../MissionPageSections/missionContactSection";
import TeamHeroSection from "../TeamPageSections/TeamHeroSection";
import TeamMemberSection from "../TeamPageSections/TeamMemberSection";
import ContactUsPageSection from "../ContactUsPageSection";
import CareerworkingSection from "../CareerPageSections/careerworkingSection";
import CareerHeroSection from "../CareerPageSections/careerHeroSection";
import CareerWhyJoinSection from "../CareerPageSections/careerWhyJoinSection";
import CareerOpeningSection from "../CareerPageSections/careerOpeningSection";
import CareerApplySection from "../CareerPageSections/careerApplySection";
import CareerCTASection from "../CareerPageSections/careerCTASection";
import OurStoryHeroSection from "../OurStorypageSections/ourStoryHeroSection";
import OurStoryJourneySection from "../OurStorypageSections/ourStoryJourneySection";
import OurStorypassionateSection from "../OurStorypageSections/ourStorypassionateSection";
import OurStoryjoinusSection from "../OurStorypageSections/ourStoryjoinusSection";
import AcademyHeroSection from "../LearnAiAcademyPageSection/academyHeroSection";
import ColoringCardsSection from "../LearnAiAcademyPageSection/coloringCardsSection";
import ReshapingCareerSection from "../LearnAiAcademyPageSection/reshapingCareerSection";
import FoundationHeroSection from "../LearnAiFoundationPageSections/foundationHeroSection";
import FoundationCardSection from "../LearnAiFoundationPageSections/foundationCardSection";
import FoundationMapSection from "../LearnAiFoundationPageSections/foundationMapSection";
import FoundationStudentsSection from "../LearnAiFoundationPageSections/foundationStudentsSection";
import FoundationctaSection from "../LearnAiFoundationPageSections/foundationctaSection";
import FoundationLastTextSection from "../LearnAiFoundationPageSections/foundationLastTextSection";
import FoundationTextSection from "../LearnAiFoundationPageSections/FoundationTextSection";
import InnovationHeroSection from "../LearnAiInnovationPageSections/innovationHeroSection";
import InnovationCardsSection from "../LearnAiInnovationPageSections/innovationCardsSection";
import InnovationhoverCardSection from "../LearnAiInnovationPageSections/innovationhoverCardSection";
import InnovationctaSection from "../LearnAiInnovationPageSections/innovationctaSection";

const Sections = ({ block }) => {
  return block?.map((item) => {
    switch (item?._type) {
      case "homeHeroSection":
        return <HomeHeroSection {...item} />;
      case "ourPillarsSection":
        return <OurPillarsSection {...item} />;
      case "ourProjectsSection":
        return <OurProjectsSection {...item} />;
      case "ourMissionSection":
        return <OurMissionSection {...item} />;
      case "industryFectsSection":
        return <IndustryFectsSection {...item} />;
      case "newsletter":
        return <Newsletter {...item} />;
      case "missionHeroSection":
        return <MissionHeroSection {...item} />;
      case "missionStatementSection":
        return <MissionStatementSection {...item} />;
      case "missionWhyMattersSection":
        return <MissionWhyMattersSection {...item} />;
      case "missionKeyPointsSection":
        return <MissionKeyPointsSection {...item} />;
      case "missionCTASection":
        return <MissionCTASection {...item} />;
      case "missionCommitmentSection":
        return <MissionCommitmentSection {...item} />;
      case "missionContactSection":
        return <MissionContactSection {...item} />;
      case "teamHeroSection":
        return <TeamHeroSection {...item} />;
      case "teamLeadershipSection":
        return <TeamMemberSection {...item} />;
      case "teamContactUsSection":
        return <ContactUsPageSection {...item} />;
      case "careerHeroSection":
        return <CareerHeroSection {...item} />;
      case "careerworkingSection":
        return <CareerworkingSection {...item} />;
      case "careerWhyJoinSection":
        return <CareerWhyJoinSection {...item} />;
      case "careerOpeningSection":
        return <CareerOpeningSection {...item} />;
      case "careerApplySection":
        return <CareerApplySection {...item} />;
      case "careerCTASection":
        return <CareerCTASection {...item} />;
      case "ourStoryHeroSection":
        return <OurStoryHeroSection {...item} />;
      case "ourStoryJourneySection":
        return <OurStoryJourneySection {...item} />;
      case "ourStorypassionateSection":
        return <OurStorypassionateSection {...item} />;
      case "ourStoryjoinusSection":
        return <OurStoryjoinusSection {...item} />;
      case "academyHeroSection":
        return <AcademyHeroSection {...item} />;
      case "coloringCardsSection":
        return <ColoringCardsSection {...item} />;
      case "reshapingCareerSection":
        return <ReshapingCareerSection {...item} />;
      case "foundationHeroSection":
        return <FoundationHeroSection {...item} />;
      case "foundationTextSection":
        return <FoundationTextSection {...item} />;
      case "foundationCardSection":
        return <FoundationCardSection {...item} />;
      case "foundationMapSection":
        return <FoundationMapSection {...item} />;
      case "foundationStudentsSection":
        return <FoundationStudentsSection {...item} />;
      case "foundationLastTextSection":
        return <FoundationLastTextSection {...item} />;
      case "foundationctaSection":
        return <FoundationctaSection {...item} />;
      case "innovationHeroSection":
        return <InnovationHeroSection {...item} />;
      case "innovationCardsSection":
        return <InnovationCardsSection {...item} />;
      case "innovationhoverCardSection":
        return <InnovationhoverCardSection {...item} />;
      case "innovationctaSection":
        return <InnovationctaSection {...item} />;
    }
  });
};

export default Sections;
