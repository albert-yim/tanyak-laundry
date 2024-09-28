import { Appliance, ApplianceMode, AppliancePayload } from "../types";

/**
 * helper function to convert
 * from Appliances backend data type
 * to appliance frontend data type
 */
export function convertAppliancesPayload(
  payload: AppliancePayload[],
): Appliance[] {
  return payload.map((data) => ({
    id: data.id,
    location: data.location,
    type: data.type,
    status: data.status,
    lastUsage: {
      startTime: data.usage_history?.start_time ?? "20230320T000000",
      endTime: data.usage_history?.end_time ?? "20241219T000000",
      user: data.usage_history?.user ?? {
        name: "김공군",
        serviceId: "00-00000000",
        class: "000",
        id: "",
      },
    },
  }));
}
// const [appliances, setAppliances] = useState<Appliance[]>([]);
//
// const rearrangeAppliances = (apps: Appliance[]) => {
//   const washingMachines = apps
//     .filter((a) => a.type === "washing_machine")
//     .sort((a, b) => a.location - b.location);
//   const dryers = apps
//     .filter((a) => a.type === "dryer")
//     .sort((a, b) => a.location - b.location);
//   return [
//     ...washingMachines.slice(0, 2),
//     ...dryers.slice(0, 2),
//     ...washingMachines.slice(2, 4),
//     ...dryers.slice(2, 4),
//   ];
// };
//
// useEffect(() => {
//   fetchAppliances().then((appliances) => {
//     setAppliances(rearrangeAppliances(appliances));
//   });
// }, []);
