'use client';

import { motion } from 'framer-motion';
import { PageTransition, SlideIn, StaggerContainer } from '@/components/animations/Transitions';
import { VintagePageWrapper } from '@/components/VintageEffects';
import { ProgressBar } from '@/components/ProgressBar';

// Vintage AI Lab Components
interface TenetProps {
  title: string;
  text: string;
  icon: string;
  delay?: number;
}

function TenetCard({ title, text, icon, delay = 0 }: TenetProps) {
  return (
    <SlideIn delay={delay}>
  <div className="relative p-6 rounded-lg border-2 border-ai-brass/60 bg-ai-parchment/90 text-ai-charcoal overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        {/* Perforated ticket edges (left/right) */}
  <div className="hidden md:block absolute inset-y-0 left-0 w-3 bg-gradient-to-b from-transparent via-ai-brass/30 to-transparent" />
  <div className="hidden md:block absolute inset-y-0 right-0 w-3 bg-gradient-to-b from-transparent via-ai-brass/30 to-transparent" />
        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(0deg, rgba(26,58,82,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,82,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        {/* Punch card holes */}
        <div className="hidden md:flex absolute top-2 left-2 gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-ai-charcoal/20" />
          ))}
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.span className="text-2xl" aria-hidden
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              {icon}
            </motion.span>
            <h4 className="text-xl md:text-2xl font-poster text-ai-charcoal drop-shadow-[2px_2px_0_#D4A574]">
              {title}
            </h4>
          </div>
          <p className="text-sm md:text-base leading-relaxed font-body">
            {text}
          </p>
        </div>
        {/* Corner rivets */}
  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-ai-brass/40 border border-ai-brass" />
  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-ai-brass/40 border border-ai-brass" />
      </div>
    </SlideIn>
  );
}

interface InstrumentProps {
  name: string;
  detail: string;
  badge: string;
  delay?: number;
}

function LabInstrument({ name, detail, badge, delay = 0 }: InstrumentProps) {
  return (
    <SlideIn delay={delay}>
  <motion.div whileHover={{ y: -6, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} 
      className="relative p-5 rounded-md border-2 border-ai-brass/60 bg-ai-parchment/95 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        {/* Punch-card pattern */}
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.08) 10px, rgba(0,0,0,0.08) 11px)' }}
        />
        {/* Vacuum tube glow */}
  <motion.div className="absolute -top-1 left-4 w-3 h-3 rounded-full bg-ai-brass/40 blur-sm"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-marquee text-lg text-ai-charcoal">{name}</h5>
            <span className="text-xs px-2 py-0.5 rounded-full border border-ai-brass/60 text-ai-charcoal bg-ai-parchment/80">
              {badge}
            </span>
          </div>
          <p className="text-sm text-ai-charcoal/90 font-body">{detail}</p>
        </div>
        {/* Stamp */}
        <motion.div className="absolute -top-2 -right-2 rotate-6"
                    animate={{ rotate: [6, 4, 6], scale: [1, 1.03, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="px-3 py-1 text-[10px] uppercase tracking-wider border-2 border-ai-brass text-ai-charcoal bg-ai-parchment/90 font-carnival shadow-sm">
            Verified
          </div>
        </motion.div>
        {/* Corner rivets */}
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-ai-brass/50" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-ai-brass/50" />
      </motion.div>
    </SlideIn>
  );
}

interface ExhibitProps {
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  delay?: number;
}

function ExhibitCard({ title, summary, metrics, delay = 0 }: ExhibitProps) {
  return (
    <SlideIn delay={delay}>
  <motion.div whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }} 
      className="relative rounded-lg border-2 border-ai-brass bg-ai-parchment/95 p-6 overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        {/* Oscilloscope frame */}
  <div className="absolute inset-x-4 top-4 h-24 rounded bg-ai-navy border-2 border-ai-brass/60 shadow-inner">
          {/* Waveform */}
          <motion.div className="absolute inset-0"
                      animate={{
                        backgroundPositionX: [0, 200],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      style={{
                        backgroundImage: 'linear-gradient(90deg, rgba(0,255,0,0.6) 2px, transparent 2px)',
                        backgroundSize: '8px 100%',
                        boxShadow: 'inset 0 0 20px rgba(0,255,0,0.15)'
                      }}
          />
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
          {/* CRT scan line */}
          <motion.div className="absolute inset-x-0 h-px bg-white/20"
                      animate={{ y: [0, 96] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="mt-28">
          <h4 className="font-poster text-2xl text-ai-charcoal drop-shadow-[2px_2px_0_#D4A574] mb-2">{title}</h4>
          <p className="text-sm font-body text-ai-charcoal/90 mb-4">{summary}</p>
          <div className="flex flex-wrap gap-3">
            {metrics.map((m) => (
              <span key={m.label} className="text-xs px-2 py-1 rounded border border-ai-brass bg-white/60 text-ai-charcoal shadow-sm">
                <strong className="mr-1">{m.label}:</strong> {m.value}
              </span>
            ))}
          </div>
        </div>
        {/* Corners with rivets */}
        <div className="absolute -left-1 -top-1 w-4 h-4 border-t-2 border-l-2 border-ai-brass">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-ai-brass" />
        </div>
        <div className="absolute -right-1 -top-1 w-4 h-4 border-t-2 border-r-2 border-ai-brass">
          <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-ai-brass" />
        </div>
        <div className="absolute -left-1 -bottom-1 w-4 h-4 border-b-2 border-l-2 border-ai-brass">
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full bg-ai-brass" />
        </div>
        <div className="absolute -right-1 -bottom-1 w-4 h-4 border-b-2 border-r-2 border-ai-brass">
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-ai-brass" />
        </div>
      </motion.div>
    </SlideIn>
  );
}

export function AIExpertWorld() {
  return (
    <PageTransition>
      <VintagePageWrapper intensity="medium">
        <ProgressBar />
        {/* Hero */}
  <section className="relative min-h-[85vh] bg-gradient-to-b from-ai-parchment via-[#F8F4E6] to-ai-parchment text-ai-charcoal overflow-hidden">
          {/* Teletype ticker */}
          <motion.div className="absolute top-0 left-0 right-0 h-8 bg-ai-navy text-ai-parchment text-[10px] md:text-xs tracking-[0.3em] flex items-center border-b-2 border-ai-brass/40"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="whitespace-nowrap px-6">⚡ TRANSFORMERS • DIFFUSION • RLHF • MULTIMODAL • RAG • AGENTS • FINE-TUNING ⚡</div>
            <div className="whitespace-nowrap px-6">⚡ TRANSFORMERS • DIFFUSION • RLHF • MULTIMODAL • RAG • AGENTS • FINE-TUNING ⚡</div>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative">
            {/* Circuit traces background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 Q100,50 100,100 T200,100" stroke="currentColor" fill="none" strokeWidth="2"/>
                <path d="M300,20 L300,80 L400,80" stroke="currentColor" fill="none" strokeWidth="2"/>
                <circle cx="100" cy="50" r="4" fill="currentColor"/>
                <circle cx="200" cy="100" r="4" fill="currentColor"/>
              </svg>
            </div>

            {/* Badge */}
            <div className="relative mx-auto w-full md:w-4/5 lg:w-3/4">
              {/* Vintage tech decorations */}
              <motion.div className="absolute -top-16 -left-10 text-3xl opacity-40 hidden md:block" 
                          animate={{ rotate: [0, 8, 0], y: [0, -5, 0] }} 
                          transition={{ duration: 8, repeat: Infinity }}>
                🧠
              </motion.div>
              <motion.div className="absolute -top-10 -right-8 text-2xl opacity-40 hidden md:block" 
                          animate={{ rotate: [-8, 0, -8], y: [0, -5, 0] }} 
                          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}>
                ⚙️
              </motion.div>
              <motion.div className="absolute -bottom-12 left-1/4 text-xl opacity-30 hidden lg:block"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 6, repeat: Infinity }}>
                🔬
              </motion.div>

              <div className="relative border-4 border-ai-brass rounded-xl bg-ai-parchment/80 backdrop-blur-sm p-8 md:p-10 text-center shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
                {/* Rivets */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} 
                       className={`absolute w-3 h-3 rounded-full bg-cloud-copper/60 border-2 border-cloud-copper ${
                         i === 0 ? 'top-2 left-2' : i === 1 ? 'top-2 right-2' : i === 2 ? 'bottom-2 left-2' : 'bottom-2 right-2'
                       }`} 
                  />
                ))}

                <div className="mb-4 inline-block px-4 py-1 rounded-full border-2 border-ai-brass/50 bg-ai-parchment/90 text-xs tracking-widest font-carnival">
                  CLASSIFIED: LEVEL Ω
                </div>
                
                <h1 className="font-poster text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ai-charcoal drop-shadow-[4px_4px_0_#D4A574] leading-tight">
                  INTELLIGENCE<br/>ARCHITECT
                </h1>
                
                <div className="mt-4 mb-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cloud-copper to-transparent" />
                
                <p className="font-handwritten text-base md:text-xl max-w-2xl mx-auto text-ai-charcoal/90 leading-relaxed">
                  I engineer minds for machines—systems that learn from data, reason through complexity, perceive the world in pixels and tokens, and act with precision. From foundation models to production inference, I build AI that delivers.
                </p>
                
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-1.5 text-xs rounded-full border-2 border-ai-brass bg-ai-parchment/80 shadow-sm">LLMs & TRANSFORMERS</span>
                  <span className="px-4 py-1.5 text-xs rounded-full border-2 border-ai-brass bg-ai-parchment/80 shadow-sm">MULTIMODAL AI</span>
                  <span className="px-4 py-1.5 text-xs rounded-full border-2 border-ai-brass bg-ai-parchment/80 shadow-sm">RLHF & ALIGNMENT</span>
                  <span className="px-4 py-1.5 text-xs rounded-full border-2 border-ai-brass bg-ai-parchment/80 shadow-sm">DIFFUSION & GEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Tenets */}
  <section className="bg-gradient-to-b from-ai-parchment to-[#EFE9D5] py-20 border-t-4 border-ai-brass/30">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section header with vintage badge */}
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <h2 className="font-marquee text-3xl md:text-5xl text-cloud-charcoal drop-shadow-[3px_3px_0_#D4A574]">The Four Pillars</h2>
                <motion.div className="absolute -right-12 -top-8 hidden lg:block"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}>
                  <div className="px-3 py-1 text-[9px] border-2 border-ai-brass bg-ai-parchment rounded rotate-12 font-carnival shadow-md">
                    EST. 1956
                  </div>
                </motion.div>
              </div>
              <p className="mt-3 text-cloud-charcoal/70 font-body max-w-2xl mx-auto">Every intelligent system I build rests on these foundational principles—forged in the crucible of classical AI and tempered with modern breakthroughs.</p>
            </div>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <TenetCard icon="🧮" title="Learning" 
                           text="I architect neural networks that extract patterns from noise—from backprop basics to gradient-boosted ensembles and transformer attention. Every model learns, adapts, and scales." />
                <TenetCard icon="⚖️" title="Reasoning" 
                           text="Symbolic logic meets neural inference. I build systems that plan, search, and optimize—constraint solvers, graph reasoners, and chain-of-thought prompting for transparent decisions." 
                           delay={0.05} />
                <TenetCard icon="�" title="Perception" 
                           text="Computer vision and NLP are my bread and butter. I've trained models to see, hear, and understand—object detection, segmentation, embeddings, and multimodal fusion at scale." 
                           delay={0.1} />
                <TenetCard icon="🎯" title="Action" 
                           text="Intelligence without action is theory. I deploy RL agents, control policies, and agentic workflows that take real-world actions—safe, measurable, and optimized for outcomes." 
                           delay={0.15} />
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Cutting-Edge Arsenal */}
  <section className="bg-ai-parchment py-20 border-y-4 border-ai-brass/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10">
              <h3 className="font-marquee text-2xl md:text-4xl text-cloud-charcoal mb-3">Arsenal: Modern Techniques</h3>
              <p className="text-cloud-charcoal/70 font-body max-w-3xl">
                The latest tools, frameworks, and methodologies I deploy to build state-of-the-art AI systems. From transformers to diffusion, I stay at the bleeding edge.
              </p>
            </div>

            <StaggerContainer>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <LabInstrument name="Transformers" detail="Self-attention mechanisms for sequence modeling—GPT, BERT, T5 architectures" badge="Vaswani '17" />
                <LabInstrument name="Diffusion Models" detail="Iterative denoising for generative tasks—Stable Diffusion, DALL-E, image synthesis" badge="2020s" delay={0.05} />
                <LabInstrument name="RLHF Pipeline" detail="Reinforcement Learning from Human Feedback—alignment, reward modeling, PPO tuning" badge="InstructGPT" delay={0.1} />
                <LabInstrument name="LoRA & PEFT" detail="Parameter-efficient fine-tuning—adapt foundation models with minimal compute" badge="Adapter" delay={0.15} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <LabInstrument name="RAG Systems" detail="Retrieval-Augmented Generation—vector DBs, embeddings, grounded generation" badge="Lewis '20" delay={0.2} />
                <LabInstrument name="Multimodal Fusion" detail="CLIP, Flamingo, GPT-4V—vision-language models that see and understand" badge="OpenAI" delay={0.25} />
                <LabInstrument name="Tool-Use Agents" detail="LLMs that plan, call APIs, and orchestrate actions—ReAct, function calling" badge="Agentic" delay={0.3} />
                <LabInstrument name="Quantization" detail="INT8/4-bit inference, pruning, distillation—edge deployment and cost optimization" badge="GPTQ" delay={0.35} />
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Showcase Projects */}
  <section className="bg-gradient-to-b from-ai-parchment to-[#F8F4E6] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="font-marquee text-3xl md:text-5xl text-cloud-charcoal drop-shadow-[3px_3px_0_#D4A574] mb-3">Project Showcase</h3>
              <p className="text-cloud-charcoal/70 font-body max-w-3xl mx-auto">
                Real systems I've architected and deployed—from research prototypes to production-grade AI that processes millions of requests daily. Each one pushed boundaries and delivered measurable impact.
              </p>
            </div>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ExhibitCard
                  title="Domain Expert LLM"
                  summary="Fine-tuned Llama 3 70B with LoRA adapters, RAG pipeline over 10M+ docs, and Constitutional AI guardrails. Built custom vector DB indexing and deployed on vLLM for <200ms p95 latency at scale."
                  metrics={[{ label: 'Accuracy', value: '96.3%' }, { label: 'p95 Latency', value: '187ms' }, { label: 'Context', value: '32k' }, { label: 'Throughput', value: '2k req/s' }]} />
                <ExhibitCard
                  title="Real-Time Vision System"
                  summary="YOLOv8 + SAM segmentation pipeline running on NVIDIA TensorRT. Custom training on 500k+ annotated images with online hard example mining. Handles 4K video streams with <50ms inference time."
                  metrics={[{ label: 'mAP@0.5', value: '0.91' }, { label: 'FPS', value: '165' }, { label: 'GPU Util', value: '78%' }, { label: 'Edge Deploy', value: 'Jetson' }]} delay={0.05} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ExhibitCard
                  title="Generative Art Engine"
                  summary="Stable Diffusion XL with ControlNet, custom LoRA training, and multi-stage refinement. Built efficient inference server with 8-bit quantization and batching—powers 10k+ daily generations."
                  metrics={[{ label: 'Quality', value: 'CLIP 0.87' }, { label: 'Gen Time', value: '3.2s' }, { label: 'Memory', value: '11GB' }, { label: 'Batch', value: '8x' }]} delay={0.1} />
                <ExhibitCard
                  title="RL Trading Agent"
                  summary="PPO-based agent trained on 5 years of market data with RLHF from expert traders. Multi-asset portfolio optimization with risk constraints. Deployed live with continuous learning and A/B testing."
                  metrics={[{ label: 'Sharpe', value: '2.4' }, { label: 'Return', value: '+41%' }, { label: 'Max DD', value: '-8.3%' }, { label: 'Win Rate', value: '67%' }]} delay={0.15} />
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Tech Stack - New Section */}
  <section className="bg-[#EDE5CF] py-20 border-t-4 border-ai-brass/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="font-marquee text-3xl md:text-5xl text-cloud-charcoal drop-shadow-[3px_3px_0_#D4A574] mb-3">Full Stack Mastery</h3>
              <p className="text-cloud-charcoal/70 font-body max-w-3xl mx-auto">
                From research notebooks to production infrastructure—I command the entire AI pipeline with battle-tested tools and frameworks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frameworks */}
              <div className="relative p-6 rounded-lg border-2 border-ai-brass/60 bg-ai-parchment/80 shadow-lg">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-cloud-copper text-web-cream text-xs font-carnival rounded-full shadow-sm">
                  CORE FRAMEWORKS
                </div>
                <div className="mt-4 space-y-3">
                  {['PyTorch & PyTorch Lightning', 'TensorFlow & JAX', 'Hugging Face Transformers', 'LangChain & LlamaIndex', 'scikit-learn & XGBoost'].map((item, i) => (
                    <motion.div key={item} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm font-body text-cloud-charcoal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cloud-copper" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MLOps */}
              <div className="relative p-6 rounded-lg border-2 border-ai-brass/60 bg-ai-parchment/80 shadow-lg">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-cloud-copper text-web-cream text-xs font-carnival rounded-full shadow-sm">
                  MLOPS & INFRA
                </div>
                <div className="mt-4 space-y-3">
                  {['Docker & Kubernetes', 'AWS SageMaker & Lambda', 'Weights & Biases', 'MLflow & DVC', 'Ray & Apache Spark'].map((item, i) => (
                    <motion.div key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm font-body text-cloud-charcoal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cloud-copper" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Specialized */}
              <div className="relative p-6 rounded-lg border-2 border-ai-brass/60 bg-ai-parchment/80 shadow-lg">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-cloud-copper text-web-cream text-xs font-carnival rounded-full shadow-sm">
                  SPECIALIZED
                </div>
                <div className="mt-4 space-y-3">
                  {['CUDA & TensorRT', 'OpenCV & Pillow', 'Pinecone & Weaviate', 'FastAPI & gRPC', 'Gymnasium (OpenAI Gym)'].map((item, i) => (
                    <motion.div key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm font-body text-cloud-charcoal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cloud-copper" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethos & CTA */}
  <section className="bg-gradient-to-b from-[#EDE5CF] to-ai-parchment py-20 border-t-4 border-ai-brass/40">
          <div className="max-w-5xl mx-auto px-4">
            {/* Vintage lab classification badge */}
            <div className="text-center mb-8">
              <motion.div className="inline-block relative"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="px-6 py-3 border-4 border-ai-brass/60 bg-ai-parchment/90 rounded-lg shadow-xl">
                  <div className="text-xs tracking-widest text-ai-charcoal/60 mb-1 font-carnival">LABORATORY CLASSIFICATION</div>
                  <div className="text-2xl font-poster text-ai-charcoal drop-shadow-[2px_2px_0_#D4A574]">LEVEL Ω ACCESS</div>
                </div>
                {/* Corner markers */}
                <div className="absolute -left-2 -top-2 w-4 h-4 border-t-4 border-l-4 border-ai-brass" />
                <div className="absolute -right-2 -top-2 w-4 h-4 border-t-4 border-r-4 border-ai-brass" />
                <div className="absolute -left-2 -bottom-2 w-4 h-4 border-b-4 border-l-4 border-ai-brass" />
                <div className="absolute -right-2 -bottom-2 w-4 h-4 border-b-4 border-r-4 border-ai-brass" />
              </motion.div>
            </div>

            <div className="text-center mb-10">
              <h3 className="font-marquee text-3xl md:text-5xl text-ai-charcoal drop-shadow-[3px_3px_0_#D4A574] mb-4">
                Build Intelligence.<br className="md:hidden"/> Deliver Impact.
              </h3>
              <p className="text-base md:text-lg text-ai-charcoal/80 font-body max-w-3xl mx-auto leading-relaxed">
                I don't just train models—I architect end-to-end AI systems that solve real problems at scale. From ideation to deployment, I bring clarity, rigor, and creativity to every challenge. Whether you need cutting-edge research, production ML pipelines, or strategic AI leadership, I deliver results that move the needle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="mailto:hello@jamesdesign.me"
                whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }} 
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-lg border-3 border-ai-brass bg-ai-brass text-ai-parchment font-poster text-lg shadow-[0_8px_24px_rgba(0,0,0,0.1)] relative overflow-hidden"
                aria-label="Send email to hello@jamesdesign.me">
                <span className="relative z-10">📧 Launch Collaboration</span>
                {/* Shine effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.a>
              
              <motion.a 
                href="https://github.com/jamesthegreati"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-lg border-2 border-ai-brass bg-ai-parchment/90 text-ai-charcoal font-poster text-lg shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
                aria-label="View projects on GitHub">
                View Projects
              </motion.a>
            </div>

            {/* Vintage footer decoration */}
            <div className="mt-16 flex items-center justify-center gap-4 text-xs text-ai-charcoal/40 font-carnival tracking-widest">
              <div className="h-px w-16 bg-ai-brass/30" />
              <span>INTELLIGENCE • ENGINEERED • SINCE 2018</span>
              <div className="h-px w-16 bg-ai-brass/30" />
            </div>
          </div>
        </section>
      </VintagePageWrapper>
    </PageTransition>
  );
}
