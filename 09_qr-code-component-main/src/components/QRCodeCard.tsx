const QRCodeCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg w-72">
      <div className="flex-1 overflow-hidden bg-red-400 rounded-lg">
        <img
          src="/images/image-qr-code.png"
          alt="qr code"
          className="w-full h-full bg-center bg-cover"
        />
      </div>
      <div className="flex-1 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Improve your front-end skills by building projects
        </h1>
        <p className="my-4 text-sm font-medium text-[#7B869D]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
