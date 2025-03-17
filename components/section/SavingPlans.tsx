import SectionContainer from "../container/SectionContainer";
import SectionHeader from "../layout/SectionHeader";
import SectionContent from "../layout/SectionContent";
import SavingPlan from "../layout/SavingPlan";


const SavingPlans = () => {
    return (
        <SectionContainer>

            <SectionHeader title="Saving Plans" />


            <SectionContent >

                <SavingPlan title="Di choi" current={22} target={100} className='mb-4'currency="CAD" />
                <SavingPlan title="Di choi" current={22} target={100} className='mb-4'currency="CAD" />
                <SavingPlan title="Di choi" current={22} target={100} currency="CAD" />

            </SectionContent>


        </SectionContainer>


    );
};

export default SavingPlans;
