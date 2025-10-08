import { GoogleSheetsEmbed } from '../components/GoogleSheetsEmbed';

export const metadata = {
  title: 'Content Calendar | Ami Sushi Marketing Portal',
  description: 'Digital marketing content calendar and posting schedule'
};

export default function ContentCalendarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Content Calendar
        </h1>
        <p className="text-gray-300">
          View and manage the complete digital marketing content schedule across all channels.
        </p>
      </div>

      <GoogleSheetsEmbed />
    </div>
  );
}
