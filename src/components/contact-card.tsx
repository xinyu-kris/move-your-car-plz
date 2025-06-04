import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export interface ContactCardProps {
  name: string;
  avatar: string;
  phone: string;
  gender: string;
}

const ContactCard = ({ name, avatar, gender, phone }: ContactCardProps) => {
  const handleCopy = () => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = phone;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast.success("拷贝成功");
    } catch {
      toast.error("拷贝失败");
    }
  };

  const handleContact = () => {
    // 打开手机拨号界面
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-20 h-20 shrink-0 rounded-full">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{phone}</p>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Copy phone number"
          >
            <Copy className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <Button onClick={handleContact}>
          找{gender === "male" ? "他" : "她"}挪🚗
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
