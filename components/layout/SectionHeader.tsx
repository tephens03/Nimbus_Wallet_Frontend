interface SectionHeaderProps {
    title: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="flex flex-col space-y-1.5 text-lg mb-5">
            <div className="flex justify-between">
                <div>
                    <div className="font-semibold leading-none tracking-tight text-gray-900">{title}</div>
                </div>

                {/* 
                <div>
                    <FilterButton />
                </div> */}
            </div>
        </div >

    )
}
export default SectionHeader