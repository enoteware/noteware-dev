import type { Metadata } from "next";
import { AudiencePage, type AudienceContent } from "../components/AudiencePage";
import { aca, iepa, regably } from "../work";

export const metadata: Metadata = {
  title: "For associations | noteware.dev",
  description: "Conference registration, dues, member directories, board records and websites for associations, built and run by one team.",
};

const content: AudienceContent = {
  chip: "For associations",
  titleLead: "Your members and meetings,",
  titleAccent: "in one place.",
  sub: "We build the websites and systems associations run on: conference registration, dues, member directories and board records. You get one team to call when something needs to change.",
  subject: "Association project",
  needsTitle: <>Small staff, <em>a lot to run.</em></>,
  needs: [
    { title: "Registration lives in forms and spreadsheets", desc: "Attendees, speakers and sponsors each need their own path, and staff end up matching payments by hand." },
    { title: "Dues renewals take chasing", desc: "Someone has to track who renewed, who lapsed and who still needs a reminder." },
    { title: "The website falls behind", desc: "Event dates and member news wait for the one person who knows how to update them." },
    { title: "Board records are scattered", desc: "Agendas, minutes and committee tasks sit across inboxes and shared drives." },
  ],
  buildsTitle: <>The systems <em>behind the association.</em></>,
  builds: [
    { title: "Conference registration", items: ["Attendee, speaker and sponsor sign-up", "Stripe payments", "Badges, meals and rosters", "Confirmation and update emails"] },
    { title: "Membership", items: ["Plans, dues and grace periods", "A member directory staff can trust", "One member login", "A member portal on your own site"] },
    { title: "Community and board", items: ["Member forums with a staff review queue", "Meeting calendar and agendas", "Minutes approval", "Committee tasks"] },
    { title: "Your website", items: ["WordPress sites staff can keep current", "Design that matches your association", "Hosting and deploys handled for you"] },
  ],
  proofTitle: <>Running for <em>real associations.</em></>,
  proof: [iepa, aca, regably],
  closing: <>Talk to us about <em>your next meeting.</em></>,
};

export default function AssociationsPage() {
  return <AudiencePage content={content} />;
}
