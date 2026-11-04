// Infinite scrolling strip of tool logos (Simple Icons CDN, monochrome).
const TOOLS = [
  { name: 'Python', slug: 'python' },
  { name: 'Apache Spark', slug: 'apachespark' },
  { name: 'Kafka', slug: 'apachekafka' },
  { name: 'Databricks', slug: 'databricks' },
  { name: 'Snowflake', slug: 'snowflake' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Neo4j', slug: 'neo4j' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'PyTorch', slug: 'pytorch' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'LangChain', slug: 'langchain' },
  { name: 'MLflow', slug: 'mlflow' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'React', slug: 'react' },
]

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden}>
      {TOOLS.map((tool) => (
        <li key={tool.slug} className="group flex items-center gap-3 text-muted transition-colors hover:text-fg">
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}/CE7DA5`}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            className="h-7 w-7 opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="whitespace-nowrap font-display text-base font-medium">{tool.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TechMarquee() {
  return (
    <div className="marquee relative mt-8 flex overflow-hidden">
      <div className="marquee-track flex">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
