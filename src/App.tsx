import kirsAvatar from "./assets/kris_avatar.jpg";
import ContactCard from "./components/contact-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <main className="flex justify-center mx-4 my-4">
      <Card className="min-w-[400px] min-h-[300px] w-full">
        <CardHeader>
          <CardTitle>挪一下车🚗🚗🚗</CardTitle>
          <CardDescription>请选择需要挪车的联系人</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-around h-full">
          <ContactCard
            name="Xinyu"
            avatar={kirsAvatar}
            phone="18556383211"
            gender="male"
          />
          {/* <ContactCard
            name="Ying"
            avatar={yingAvatar}
            phone="15358110813"
            gender="female"
          /> */}
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
