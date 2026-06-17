from pathlib import Path
root = Path('.')
text_ext = {'.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.md', '.css'}
bad = []
for p in root.rglob('*'):
    if p.is_file() and p.suffix in text_ext:
        raw = p.read_bytes()
        if (b'\r' in raw and b'\n' not in raw) or (b'\r\n' in raw):
            bad.append((str(p), raw.count(b'\r\n'), raw.count(b'\r'), raw.count(b'\n')))
print('bad files:', len(bad))
for item in bad:
    print(item)
