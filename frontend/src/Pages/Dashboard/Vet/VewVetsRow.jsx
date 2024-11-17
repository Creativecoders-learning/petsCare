const VewVetsRow = () => {
  return (
    <tr>
      <td className="text-sm p-4 font-medium">{+1}</td>
      <td className="text-sm p-4">
        <img
          className="w-12 h-12 object-cover rounded-md shadow-md"
          src="https://media.istockphoto.com/id/2025553061/photo/dog-at-the-veterinarian.jpg?s=612x612&w=0&k=20&c=u_LjVNN2uHbHUpJENIceM-hUl2PHtxvUDJOFI0MilEg="
          alt=""
        />
      </td>
      <td className="text-sm p-4">Dr. Emily Jordan</td>
      <td className="text-sm p-4">emily@gmail.com</td>
      <td className="text-sm p-4">Melbourne, Australia</td>
      <td className="text-sm p-4">DVMCertified Veterinary Homeopath</td>
    </tr>
  );
};

export default VewVetsRow;
