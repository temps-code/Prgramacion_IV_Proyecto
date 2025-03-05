import { Text, Image, View } from "react-native";
interface IData {
    title: string;
    value: string;
}

interface PropsData {
    data: IData;
}
function InfoCards(item: PropsData) {
    return (
        <>
            <View
                key={item.data.title}
                className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm mb-4 mx-2 flex-1 min-w-[300px]"
            >
                <Text className="text-gray-500 text-sm font-['Poppins']">{item.data.title}</Text>
                <Text className="text-gray-800 text-3xl font-bold font-['Poppins'] mt-2">
                    {item.data.value}
                </Text>
            </View>

        </>
    );
}
export default InfoCards;
