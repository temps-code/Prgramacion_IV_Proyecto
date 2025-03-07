import { Link } from "expo-router";
import { Text, Image, View } from "react-native";
interface IData {
  title: string;
  subtitle: string;
  link?: string;
  id: string;
}

interface PropsData {
  data: IData;
}
function NavigationCards(item: PropsData) {
  return (
    <>
      <View key={item.data.title} className="w-full md:w-1/2 lg:w-1/4 p-2">
        {item.data.link ? (
          <Link id={item.data.id} href={item.data.link as any} asChild>
            <View className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 items-center justify-center h-[178px]">
              <Text className="text-gray-800 text-base font-semibold font-['Poppins'] text-center">
                {item.data.title}
              </Text>
              <Text className="text-gray-500 text-sm font-['Poppins'] text-center mt-2">
                {item.data.subtitle}
              </Text>
            </View>
          </Link>
        ) : (
          <View className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 items-center justify-center h-[178px]">
            <Text className="text-gray-800 text-base font-semibold font-['Poppins'] text-center">
              {item.data.title}
            </Text>
            <Text className="text-gray-500 text-sm font-['Poppins'] text-center mt-2">
              {item.data.subtitle}
            </Text>
          </View>
        )}
      </View>
    </>
  );
}
export default NavigationCards;
