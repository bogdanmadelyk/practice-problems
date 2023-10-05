// Design a HashSet without using any built-in hash table libraries.
// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

type MyHashType = {[key: number]: boolean}

export class MyHashSet {
	hash: MyHashType
	constructor(hash: MyHashType) {
		this.hash = hash
	}

	add(key: number): void {
		this.hash[key] = true
	}

	remove(key: number): void {
		delete this.hash[key]
	}

	contains(key: number): boolean {
		return this.hash[key] ?? false
	}
}