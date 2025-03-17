import MoneyDisplay from "../layout/MoneyDisplay";


const Summary = () => {
    return (
        <>
            <MoneyDisplay title="Total Savings" value={120} currency="CAD" status="up" />
            <MoneyDisplay title="Total Incomes" value={120} currency="CAD" status="up" />
            <MoneyDisplay title="Total Saving" value={120} currency="CAD" status="down" />
        </>
    );
};

export default Summary;

