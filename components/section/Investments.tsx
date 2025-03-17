import SectionContainer from "../container/SectionContainer";
import SectionHeader from "../layout/SectionHeader";
import SectionContent from "../layout/SectionContent";
import SavingPlan from "../layout/SavingPlan";
import Investment from "../layout/Investment";


const Investments = () => {
    return (
        <SectionContainer>

            <SectionHeader title="Investments" />


            <SectionContent >

                <Investment
                    title="S-Apple"
                    price={150}
                    quantity={50}
                    diffPercentage={10}
                    isGain={true}
                    className="mb-4"
                />
                <Investment
                    title="Pi Coin"
                    price={22000}
                    quantity={1}
                    diffPercentage={-3}
                    isGain={false}
                    className="mb-4"
                />
                <Investment
                    title="Coins - Gold"
                    price={1800}
                    quantity={2}
                    diffPercentage={5}
                    isGain={true}
                />

            </SectionContent>


        </SectionContainer>


    );
};

export default Investments;
