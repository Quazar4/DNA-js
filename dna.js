function calculateGCContent(sequence) {
  const totalLength = sequence.length;
  const gcCount = (sequence.match(/[GC]/gi) || []).length;
  return (gcCount / totalLength) * 100;
}

function reverseComplement(sequence) {
  const complementMap = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const reversedSequence = sequence.split('').reverse().join('');
  const reverseComplement = reversedSequence.replace(/./g, (base) => complementMap[base]);
  return reverseComplement;
}

const sequence = prompt("Enter DNA sequence:").toUpperCase().trim();

const gcContent = calculateGCContent(sequence);
console.log(`GC content: ${gcContent.toFixed(2)}%`);

const reverseComp = reverseComplement(sequence);
console.log("Reverse complement:", reverseComp);
