import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Электронная подпись",
      description: "Получение и использование квалифицированной электронной подписи",
      icon: "FileSignature",
      action: "Получить ЭП"
    },
    {
      title: "Государственная регистрация",
      description: "Регистрация юридических лиц и индивидуальных предпринимателей",
      icon: "Building",
      action: "Подать заявление"
    },
    {
      title: "Налоговые услуги",
      description: "Подача налоговых деклараций и получение справок",
      icon: "Calculator",
      action: "Перейти к услугам"
    },
    {
      title: "Паспортные услуги",
      description: "Оформление и замена документов удостоверяющих личность",
      icon: "IdCard",
      action: "Записаться"
    },
    {
      title: "Социальные выплаты",
      description: "Назначение пособий, компенсаций и других социальных выплат",
      icon: "CreditCard",
      action: "Подать заявление"
    },
    {
      title: "Лицензирование",
      description: "Получение лицензий для осуществления различных видов деятельности",
      icon: "Award",
      action: "Подать документы"
    }
  ];

  const benefits = [
    {
      icon: "Clock",
      title: "Экономия времени",
      description: "Получайте услуги без очередей и посещения офисов"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защищенные каналы связи и конфиденциальность данных"
    },
    {
      icon: "CheckCircle",
      title: "Простота",
      description: "Интуитивно понятный интерфейс и пошаговые инструкции"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Государственная цифровая комиссия
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Современные цифровые государственные услуги для граждан и бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Начать работу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Цифровые государственные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр государственных услуг в электронном виде
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full" variant="default">
                    {service.action}
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Преимущества цифровых услуг
            </h2>
            <p className="text-xl text-gray-600">
              Почему стоит выбрать электронные государственные услуги
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={benefit.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Готовы начать использовать цифровые услуги?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к миллионам граждан, которые уже оценили удобство электронных государственных услуг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                <Icon name="Rocket" className="mr-2" size={20} />
                Регистрация на портале
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Техподдержка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Государственная цифровая комиссия</h3>
              <p className="text-gray-600 text-sm">
                Модернизация государственных услуг через цифровые технологии
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Электронная подпись</a></li>
                <li><a href="#" className="hover:text-primary">Регистрация бизнеса</a></li>
                <li><a href="#" className="hover:text-primary">Налоговые услуги</a></li>
                <li><a href="#" className="hover:text-primary">Паспортные услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Справочный центр</a></li>
                <li><a href="#" className="hover:text-primary">Техподдержка</a></li>
                <li><a href="#" className="hover:text-primary">Обратная связь</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8-800-100-00-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@gck.gov.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Государственная цифровая комиссия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;