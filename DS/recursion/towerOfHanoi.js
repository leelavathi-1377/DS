function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  const n = 3; // Number of disks
  towerOfHanoi(n, 'A', 'B', 'C');
