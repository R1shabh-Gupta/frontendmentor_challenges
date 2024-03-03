import Button from "./components/Button";

export default function App() {
  return (
    <div className="bg-[#141414] h-screen flex items-center justify-center">
      <div className="bg-[#1F1F1F] flex flex-col items-center py-8 px-8 rounded-lg">
        {/* Upper */}
        <div className="flex flex-col gap-2 items-center mb-6">
          <img
            className="rounded-full w-28 h-28"
            src="/src/assets/images/avatar-jessica.jpeg"
            alt="profile pic"
          />
          <h1 className="text-white font-semibold text-xl">Jessica Randall</h1>
          <h3 className="text-[#A8C062] mb-2 text-base">
            London, United Kingdom
          </h3>
          <p className="text-[#7F7F7F] text-sm">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>

        <div className="flex gap-3 flex-col">
          <Button title="Github" />
          <Button title="Frontend Mentor" />
          <Button title="LinkedIn" />
          <Button title="Twitter" />
          <Button title="Instagram" />
        </div>
      </div>
    </div>
  );
}
