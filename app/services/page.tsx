import Card from '../components/Card';

export default function Services() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Penetration Testing" content="Deep assessment of web apps, networks, and Android systems." />
      <Card title="Digital Forensics" content="Recover deleted files, analyze malware, extract evidence." />
      <Card title="Custom Tooling" content="Bespoke Python tools, bots, and cyber automation solutions." />
      <Card title="Threat Intelligence" content="Monitoring, log analysis, and offensive data aggregation." />
    </section>
  );
}
