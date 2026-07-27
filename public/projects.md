# Projects — Eddie Chen

A plain-text mirror of https://eddiechen.xyz/engineering. Grouped into personal projects and for-fun projects; see the linked repo or live URL for details.

## Personal projects

### local-turboquant
Python library implementing TurboQuant KV cache compression for Hugging Face Transformers. One-line API plus CLI. Includes a fused Triton attention kernel running on bit-packed 3-bit KV indices (74% KV cache reduction, near-lossless quality), benchmarked on H100s via Modal.
- https://github.com/0x3ddie/local-turboquant

### Murmur (Android)
On-device inference to convert PDFs into human-sounding audiobooks. Currently Android only with English supported. Kokoro-82M TTS via ONNX Runtime; cross-compiled espeak-ng with Dart FFI bindings; SQLite phoneme cache.
- https://play.google.com/apps/testing/com.nonchalant.murmur

### smarternano
Extended nanochat transformer with personality fine-tuning, recognized publicly by Andrej Karpathy.
- https://space3--nanochat-serve-chat.modal.run/

### openedai
Abliterated Qwen 2.5 72B parameter model served on Modal. ~4 minute spin-up.
- https://modeltesting--qwen72b-abliterated-serve.modal.run/

### Melo
ML-powered dermatology triage reaching 95% recall for melanoma (HackTech 2025). Co-founded.
- https://www.mymelo.org/

### AtomicPDF
Beginner project. Simple PDF toolkit for merging, splitting, and converting documents.
- https://www.atomicpdf.org/

## For fun

### codeafk
Agent harness CLI that keeps Codex and Cursor CLI working while you're AFK. Drive sessions from Telegram or Discord on your phone, approve shell commands remotely, and review code changes as `.diff` / `.html` files. Local-only — no hosted relay, no web dashboard, no account system; runs entirely on your laptop. Published on npm as `codeafk`.
- https://github.com/0x3ddie/codeafk
- https://www.npmjs.com/package/codeafk

### eddie's civ 7
Source-backed map of human history from 12,000 BCE to 1899. Scroll through time to see what else was happening in the world at once; every territory and archaeological site links back to its source and uncertainty note. Built on Cliopatria polity reconstructions and Wikidata-backed site records.
- https://atlas.eddiechen.workers.dev/

### systolic matrices
Quick interactive visualization for learning systolic arrays in TPU MXUs.
- https://systolic.vercel.app/

### Grocero
Meal planning platform serving 5,000+ monthly users.
- https://grocero.vercel.app/

### Syllab.ai
AI-powered educational platform with personalized study recommendations.
- https://lahacks-kpg2-2cjvqzcg6-echen1246s-projects.vercel.app/
