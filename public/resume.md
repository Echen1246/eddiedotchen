# Edward Chen — Resume

San Francisco, California · 925-725-5285 · echen1246@gmail.com
GitHub: https://github.com/0x3ddie · Portfolio: https://eddiechen.xyz/

Canonical PDF: https://eddiechen.xyz/Edward-Chen-Resume.pdf

---

## Projects

### KV-Cache Compression for Transformer Inference — `local-turboquant`
*PyTorch, Modal, Transformers, CUDA, Triton*

- Reproduced an unpublished ICLR 2026 paper from scratch and shipped it as a working library before the authors released code. One-line API, wrapper, and a CLI exposing per-generation savings, throughput, and freed VRAM. Benchmarked on H100s via Modal.
- Wrote a fused Triton attention kernel that runs directly on bit-packed 3-bit KV indices without decompressing to FP16, achieving 74% KV cache memory reduction at near-lossless quality.

Repo: https://github.com/0x3ddie/local-turboquant

### Modified Transformer Architecture — `smarternano`
*PyTorch, CUDA, OpenRouter, Transformers*

- Re-engineered the nanochat architecture with custom layer depth and weight initialization, re-trained on Nvidia's Nemotron Nano dataset; publicly recognized by Andrej Karpathy.
- Built a synthetic data generation pipeline via OpenRouter to align the model's personality, achieving coherence comparable to 560M parameter models.

Demo: https://space3--nanochat-serve-chat.modal.run/

### AI-Native App — `murmur`
*ONNX, Flutter, AI Engineering*

- Built and released a mobile app that converts any PDF into human-quality audio entirely on-device, achieving 3-second load-to-playback with zero server dependencies. Deployed Kokoro-82M transformer TTS on Android via ONNX Runtime, forking the runtime to isolate inference on a background thread for performance.
- Built an NLP preprocessing pipeline by cross-compiling espeak-ng and writing Dart FFI bindings for IPA phonemization, implementing token-aware batch splitting against the model's tokenizer vocab, and caching per-sentence phonemes in SQLite to eliminate redundant compute at inference time.

App: https://play.google.com/apps/testing/com.nonchalant.murmur

---

## Education

**Arizona State University** — August 2023 to present
BS Data Science, BA Supply Chain Management, Minor in Economics. GPA: 3.7.

Coursework: Data Structures, Operating Systems, Computer Vision, Deep Learning, Machine Learning, Linear Algebra.

Activities: Scholars of Finance, Association for Computing Machinery.

---

## Experience

### Age of Learning — Data Engineer Intern, AI/ML Systems
*June 2026 to present*

- Built a production agentic AI monitoring pipeline for 6 core stakeholder-facing Omni reports, using Snowflake Cortex, custom tool-calling agents, and directed post-training to identify anomalous report runs with 90% recall.
- Extended report-specific agents to investigate related GitLab merge requests, map anomalous metrics to likely code owners, and route incident summaries to engineering teams through a custom Slack MCP workflow.
- Engineered a next-activity recommendation system for ranking personalized learning activities after lesson completion, improving learner continuation rate by 20% while preserving learning requirements.

### mymelo.org — Co-Founder, ML Engineer
*April 2025 to June 2026*

- Won Caltech HackTech 2025. Trained EfficientNet-B0 on 30K dermoscopy images with transfer learning and class-weighted augmentation, achieving 95% recall for melanoma triage across clinical deployment.
- Engineered an AWS S3 and Lambda pipeline overnight to compress 3-5MB images to 300KB WebP, reducing per-image disk footprint by 94% while preserving originals in S3 for compliance. Built the mobile platform end-to-end.

### M.Y Intellectual Property — Software Engineer Intern
*May 2024 to August 2024*

- Engineered a unified patent search API aggregating USPTO, CNIPA, and EPO databases into a single query interface, reducing cross-jurisdictional research from 3 workflows to 1 and cutting attorney lookup time by 60%.
- Built a citation network parser to extract patent family relationships across 50K+ international filings, automating competitor portfolio analysis for 15+ client engagements.

---

## Skills

- **Languages:** C++, Python, Java, CUDA, Rust.
- **Technologies:** AWS, Docker, Flutter, React, Next.js, Django, Flask, Supabase, Git, MongoDB, Snowflake, SQLite, Modal.
- **AI/ML:** PyTorch, FastAPI, ONNX Runtime, OpenCV, vLLM, post-training, FAISS, ANOVA, Transformers, JAX.
- **Open-source contributions:** Meta PyTorch.

---

## Links

- Website: https://eddiechen.xyz/
- Projects: https://eddiechen.xyz/engineering
- Writing: https://eddiechen.xyz/writing
- GitHub: https://github.com/0x3ddie
- X / Twitter: https://twitter.com/ayocheddie
