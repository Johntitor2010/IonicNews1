import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {
  conversions: any[] = []; // Lista de conversões para exibir

  constructor() { }

  // Carregar as conversões salvas quando a página for inicializada
  ngOnInit() {
    this.loadHistory();
  }

  // Função para carregar o histórico do localStorage
  loadHistory() {
    const conversionHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    this.conversions = conversionHistory; // Atribui o histórico à variável
  }
}
